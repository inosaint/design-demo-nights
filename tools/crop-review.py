#!/usr/bin/env python3
"""Review and apply speaker-photo crops for a Design Demo Nights edition.

Photos come off phones as 4:3 landscape; the site wants 1600x900 (16:9), and the
venue is dark enough that most frames need a gamma lift. This script lets you
approve both in a browser before anything lands in assets/.

  Step 1  python3 tools/crop-review.py 6 ~/Downloads/ddn6-photos
          Builds .crop-review/6/review.html and opens it. Drag each photo to
          frame it, slide the exposure, hit "Copy approvals".

  Step 2  python3 tools/crop-review.py 6 --apply
          Reads the approvals off your clipboard (or --from-file) and writes
          1600x900 jpegs into assets/events/6/photos/.

Requires ImageMagick (`brew install imagemagick`). HEIC input is fine.
"""

import argparse
import base64
import json
import os
import re
import shutil
import subprocess
import sys
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TARGET_W, TARGET_H = 1600, 900
ASPECT = 16 / 9
PREVIEW_W = 1200          # working copy the browser drags around
EXTS = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".tif", ".tiff", ".webp"}


def die(msg):
    sys.exit(f"error: {msg}")


def magick(*args):
    return subprocess.run(["magick", *map(str, args)], check=True,
                          capture_output=True, text=True).stdout


def require_magick():
    if not shutil.which("magick"):
        die("ImageMagick not found. Install with: brew install imagemagick")


def slug(name):
    """santrupti.JPG -> santrupti — matches the lowercase filenames in assets/."""
    return re.sub(r"[^a-z0-9_-]", "", Path(name).stem.lower().replace(" ", "-"))


def review_dir(edition):
    return ROOT / ".crop-review" / str(edition)


# ── build ────────────────────────────────────────────────────────────────────

def build(edition, source_dir, open_browser=True):
    require_magick()
    src = Path(source_dir).expanduser()
    if not src.is_dir():
        die(f"not a directory: {src}")

    photos = sorted(p for p in src.iterdir()
                    if p.suffix.lower() in EXTS and not p.name.startswith("."))
    if not photos:
        die(f"no images found in {src}")

    out = review_dir(edition)
    out.mkdir(parents=True, exist_ok=True)
    for stale in out.glob("*.jpg"):
        stale.unlink()

    items, previews = [], {}
    for p in photos:
        w, h = magick("identify", "-format", "%w %h", p).split()
        w, h = int(w), int(h)
        shot = magick("identify", "-format", "%[EXIF:DateTimeOriginal]", p).strip()
        name = slug(p.name)
        prev = out / f"{name}.jpg"
        # -auto-orient here so browser coordinates match what magick will crop later
        magick(p, "-auto-orient", "-resize", f"{PREVIEW_W}x", "-strip",
               "-quality", "80", prev)
        pw, ph = (int(v) for v in magick("identify", "-format", "%w %h", prev).split())
        # Inline the preview: Chrome taints a canvas drawn from a file:// image,
        # and the live gamma preview needs getImageData.
        uri = "data:image/jpeg;base64," + base64.b64encode(prev.read_bytes()).decode()
        prev.unlink()
        items.append({
            "name": name, "src": str(p), "shot": shot,
            "w": w, "h": h, "pw": pw, "ph": ph,
        })
        previews[name] = uri

    # EXIF capture time is the running order of the night
    items.sort(key=lambda i: (i["shot"] or "9999", i["name"]))

    (out / "manifest.json").write_text(json.dumps(
        {"edition": str(edition), "items": items}, indent=2))
    page = out / "review.html"
    page.write_text(render(edition, items, previews))

    print(f"{len(items)} photo(s) → {page}")
    for i in items:
        print(f"  {i['name']:<14} {i['w']}x{i['h']}  {i['shot'] or 'no EXIF time'}")
    if open_browser:
        webbrowser.open(page.as_uri())
    print(f"\nWhen you're happy: python3 tools/crop-review.py {edition} --apply")


# ── apply ────────────────────────────────────────────────────────────────────

def parse_approvals(text):
    """Lines of: name | y-offset-in-source-px | gamma"""
    rows = {}
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = [c.strip() for c in line.split("|")]
        if len(parts) != 3:
            continue
        name, y, gamma = parts
        try:
            rows[name] = (int(y), float(gamma))
        except ValueError:
            continue
    return rows


def apply(edition, text):
    require_magick()
    manifest = review_dir(edition) / "manifest.json"
    if not manifest.exists():
        die(f"no review found for edition {edition} — run the build step first")
    items = {i["name"]: i for i in json.loads(manifest.read_text())["items"]}

    rows = parse_approvals(text)
    if not rows:
        die("no approval lines found — expected `name | y-offset | gamma` per line")

    dest = ROOT / "assets" / "events" / str(edition) / "photos"
    dest.mkdir(parents=True, exist_ok=True)

    for name, (y, gamma) in rows.items():
        if name not in items:
            print(f"  skip {name} — not in this edition's review")
            continue
        it = items[name]
        w, h = it["w"], it["h"]
        ch = int(w / ASPECT)
        if ch > h:                       # portrait-ish source: crop width instead
            ch, cw = h, int(h * ASPECT)
            x, y = max(0, min((w - cw) // 2, w - cw)), 0
        else:
            cw, x = w, 0
            y = max(0, min(y, h - ch))
        target = dest / f"{name}.jpeg"
        magick(it["src"], "-auto-orient", "-crop", f"{cw}x{ch}+{x}+{y}", "+repage",
               "-gamma", f"{gamma:g}", "-sigmoidal-contrast", "2,45%",
               "-resize", f"{TARGET_W}x{TARGET_H}", "-strip", "-quality", "82", target)
        kb = target.stat().st_size // 1024
        print(f"  {target.relative_to(ROOT)}  {TARGET_W}x{TARGET_H}  {kb}KB  "
              f"(crop +{x}+{y}, gamma {gamma:g})")

    print(f"\nDone. Reference these as `photo: \"<name>.jpeg\"` in script.js.")


def clipboard():
    try:
        return subprocess.run(["pbpaste"], capture_output=True, text=True,
                              check=True).stdout
    except Exception:
        die("couldn't read the clipboard — pass --from-file instead")


# ── page ─────────────────────────────────────────────────────────────────────

def render(edition, items, previews):
    payload = [dict(i, file=previews[i["name"]]) for i in items]
    return (PAGE.replace("__EDITION__", str(edition))
                .replace("__DATA__", json.dumps(payload)))


PAGE = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DDN __EDITION__ · crop review</title>
<style>
  :root {
    --bg: #14151a; --panel: #1c1e26; --line: #2e313d;
    --ink: #e9eaf0; --muted: #9aa0b0; --accent: #3b82f6; --ok: #34d399;
    font-family: ui-sans-serif, -apple-system, "SF Pro Text", system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); }
  header {
    position: sticky; top: 0; z-index: 10; background: rgba(20,21,26,.94);
    backdrop-filter: blur(8px); border-bottom: 1px solid var(--line);
    padding: 14px 24px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  }
  h1 { font-size: 15px; margin: 0; font-weight: 600; letter-spacing: -.01em; }
  .count { color: var(--muted); font-size: 13px; }
  .spacer { flex: 1; }
  button {
    font: inherit; font-size: 13px; font-weight: 500; color: var(--ink);
    background: var(--panel); border: 1px solid var(--line); border-radius: 7px;
    padding: 7px 13px; cursor: pointer;
  }
  button:hover { border-color: #454a5c; }
  button.primary { background: var(--accent); border-color: var(--accent); color: #fff; }
  button.primary:disabled { opacity: .4; cursor: not-allowed; }
  main { padding: 24px; display: grid; gap: 20px; max-width: 1180px; margin: 0 auto; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .card.approved { border-color: var(--ok); }
  .bar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); }
  .name { font-weight: 600; font-size: 14px; }
  .meta { color: var(--muted); font-size: 12px; font-variant-numeric: tabular-nums; }
  .badge { font-size: 11px; color: var(--ok); border: 1px solid var(--ok); border-radius: 20px; padding: 2px 9px; opacity: 0; }
  .card.approved .badge { opacity: 1; }
  .stage { position: relative; aspect-ratio: 16/9; background: #000; overflow: hidden; cursor: grab; touch-action: none; }
  .stage.dragging { cursor: grabbing; }
  .stage canvas { position: absolute; left: 0; width: 100%; display: block; }
  .hint {
    position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%);
    background: rgba(0,0,0,.6); color: #fff; font-size: 11px; padding: 4px 10px;
    border-radius: 20px; pointer-events: none; transition: opacity .2s;
  }
  .stage.touched .hint { opacity: 0; }
  .controls { display: flex; align-items: center; gap: 14px; padding: 12px 16px; flex-wrap: wrap; }
  label { font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 8px; }
  input[type=range] { accent-color: var(--accent); width: 190px; }
  .val { font-variant-numeric: tabular-nums; color: var(--ink); min-width: 34px; }
  footer { padding: 8px 24px 48px; max-width: 1180px; margin: 0 auto; }
  textarea {
    width: 100%; min-height: 130px; background: #0f1015; color: var(--ink);
    border: 1px solid var(--line); border-radius: 10px; padding: 12px;
    font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; line-height: 1.6;
  }
  .note { color: var(--muted); font-size: 12px; line-height: 1.6; margin: 10px 0 0; }
  code { background: #0f1015; border: 1px solid var(--line); border-radius: 4px; padding: 1px 5px; font-size: 11px; }
</style>
</head>
<body>
<header>
  <h1>Design Demo Nights __EDITION__ · crop review</h1>
  <span class="count" id="count"></span>
  <span class="spacer"></span>
  <button id="reset">Reset all</button>
  <button id="approveAll">Approve all</button>
  <button class="primary" id="copy">Copy approvals</button>
</header>

<main id="cards"></main>

<footer>
  <textarea id="out" spellcheck="false" readonly></textarea>
  <p class="note">
    Drag a photo up or down to frame it; the window is a true 16:9 crop of the full-width source.
    Exposure applies the same gamma + sigmoidal contrast the export uses, so what you see is what gets written.
    Cards you touch are auto-approved — the rest keep their suggested values.<br>
    Then run <code>python3 tools/crop-review.py __EDITION__ --apply</code> to write
    <code>assets/events/__EDITION__/photos/</code>.
  </p>
</footer>

<script>
const ITEMS = __DATA__;

// Mirror of ImageMagick's `-gamma g -sigmoidal-contrast 2,45%` so the preview is honest.
const CONTRAST = 2, MIDPOINT = 0.45;
const sig = v => 1 / (1 + Math.exp(CONTRAST * (MIDPOINT - v)));
const SIG0 = sig(0), SIG1 = sig(1);
function lut(gamma) {
  const t = new Uint8ClampedArray(256);
  for (let i = 0; i < 256; i++) {
    const g = Math.pow(i / 255, 1 / gamma);
    t[i] = Math.round(255 * Math.min(1, Math.max(0, (sig(g) - SIG0) / (SIG1 - SIG0))));
  }
  return t;
}

// Default framing: keep the speaker, shed the ceiling. Bottom-weighted for tall
// rooms, and a gentle lift for anything shot in the dark.
const suggest = it => ({ frac: 0.35, gamma: 1.35 });

const cards = document.getElementById('cards');
const state = new Map();

ITEMS.forEach(it => {
  const cropH = Math.round(it.pw / (16 / 9));         // preview-space crop height
  const range = Math.max(0, it.ph - cropH);            // how far it can travel
  const s = { ...suggest(it), cropH, range, approved: false, img: null };
  state.set(it.name, s);

  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <div class="bar">
      <span class="name">${it.name}</span>
      <span class="meta">${it.w}×${it.h}${it.shot ? ' · ' + it.shot.slice(11) : ''}</span>
      <span class="spacer" style="flex:1"></span>
      <span class="badge">approved</span>
    </div>
    <div class="stage" data-name="${it.name}">
      <canvas></canvas>
      <div class="hint">drag to reframe</div>
    </div>
    <div class="controls">
      <label>Exposure
        <input type="range" min="0.8" max="2.2" step="0.05" value="${s.gamma}" data-role="gamma">
        <span class="val" data-role="gammaVal">${s.gamma.toFixed(2)}</span>
      </label>
      <label>Vertical
        <input type="range" min="0" max="1" step="0.005" value="${s.frac}" data-role="frac">
        <span class="val" data-role="fracVal">${Math.round(s.frac * 100)}%</span>
      </label>
      <span class="spacer" style="flex:1"></span>
      <span class="meta" data-role="readout"></span>
    </div>`;
  cards.append(card);

  const stage = card.querySelector('.stage');
  const canvas = card.querySelector('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const gammaEl = card.querySelector('[data-role=gamma]');
  const fracEl = card.querySelector('[data-role=frac]');

  canvas.width = it.pw; canvas.height = it.ph;
  canvas.style.aspectRatio = `${it.pw} / ${it.ph}`;

  const img = new Image();
  img.onload = () => { s.img = img; paint(); };
  img.src = it.file;

  function paint() {
    if (!s.img) return;
    ctx.drawImage(s.img, 0, 0, it.pw, it.ph);
    const d = ctx.getImageData(0, 0, it.pw, it.ph);
    const t = lut(s.gamma), px = d.data;
    for (let i = 0; i < px.length; i += 4) {
      px[i] = t[px[i]]; px[i + 1] = t[px[i + 1]]; px[i + 2] = t[px[i + 2]];
    }
    ctx.putImageData(d, 0, 0);
    // Slide the canvas so the chosen band fills the 16:9 stage.
    canvas.style.top = `${-(s.frac * s.range) / s.cropH * 100}%`;
    card.querySelector('[data-role=gammaVal]').textContent = s.gamma.toFixed(2);
    card.querySelector('[data-role=fracVal]').textContent = Math.round(s.frac * 100) + '%';
    card.querySelector('[data-role=readout]').textContent = `y ${srcY(it, s)}px · gamma ${s.gamma.toFixed(2)}`;
    card.classList.toggle('approved', s.approved);
    gammaEl.value = s.gamma; fracEl.value = s.frac;
    refresh();
  }
  s.paint = paint;

  const touch = () => { s.approved = true; stage.classList.add('touched'); };
  gammaEl.addEventListener('input', e => { s.gamma = +e.target.value; touch(); paint(); });
  fracEl.addEventListener('input', e => { s.frac = +e.target.value; touch(); paint(); });

  let dragY = null, dragFrac = 0;
  stage.addEventListener('pointerdown', e => {
    dragY = e.clientY; dragFrac = s.frac;
    stage.setPointerCapture(e.pointerId); stage.classList.add('dragging'); touch();
  });
  stage.addEventListener('pointermove', e => {
    if (dragY === null || !s.range) return;
    const scale = stage.clientHeight / s.cropH;          // stage px per preview px
    const delta = (e.clientY - dragY) / scale / s.range; // drag down => show higher band
    s.frac = Math.min(1, Math.max(0, dragFrac - delta));
    paint();
  });
  const end = e => { dragY = null; stage.classList.remove('dragging'); };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
});

// Preview-space fraction -> source-space y offset for the real crop.
function srcY(it, s) {
  const cropH = Math.round(it.w / (16 / 9));
  return Math.max(0, Math.min(Math.round(s.frac * (it.h - cropH)), Math.max(0, it.h - cropH)));
}

function lines() {
  return ITEMS.map(it => {
    const s = state.get(it.name);
    return `${it.name} | ${srcY(it, s)} | ${s.gamma.toFixed(2)}`;
  }).join('\n');
}

function refresh() {
  const n = ITEMS.filter(it => state.get(it.name).approved).length;
  document.getElementById('count').textContent = `${n} of ${ITEMS.length} approved`;
  document.getElementById('out').value = lines();
}

document.getElementById('copy').addEventListener('click', async e => {
  await navigator.clipboard.writeText(lines());
  e.target.textContent = 'Copied ✓';
  setTimeout(() => (e.target.textContent = 'Copy approvals'), 1400);
});
document.getElementById('approveAll').addEventListener('click', () => {
  ITEMS.forEach(it => { const s = state.get(it.name); s.approved = true; s.paint(); });
});
document.getElementById('reset').addEventListener('click', () => {
  ITEMS.forEach(it => {
    const s = state.get(it.name);
    Object.assign(s, suggest(it), { approved: false });
    s.paint();
  });
});
refresh();
</script>
</body>
</html>
"""


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("edition", help="edition number, e.g. 6")
    ap.add_argument("source", nargs="?", help="folder of original photos")
    ap.add_argument("--apply", action="store_true",
                    help="write final crops from approvals on the clipboard")
    ap.add_argument("--from-file", help="read approvals from a file instead of the clipboard")
    ap.add_argument("--no-open", action="store_true", help="don't open the browser")
    a = ap.parse_args()

    if a.apply or a.from_file:
        text = Path(a.from_file).read_text() if a.from_file else clipboard()
        apply(a.edition, text)
    elif a.source:
        build(a.edition, a.source, open_browser=not a.no_open)
    else:
        ap.error("give a source folder to review, or --apply to write the crops")


if __name__ == "__main__":
    main()
