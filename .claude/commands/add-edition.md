## name: add-edition
description: Populate a Design Demo Nights edition in script.js from a Luma CSV export, a free-text notes dump, and speaker photos. Use when the user wants to fill in demos for a past or upcoming edition, provides a Luma attendee/speaker export, pastes meeting notes or a recap doc, or drops photos into an edition's photos folder. Handles social link extraction, demo description parsing, and photo-to-speaker matching.

# Populate Edition

You are filling in one edition of Design Demo Nights in `script.js`. Your job is to take messy raw inputs — a Luma CSV, a text dump of notes/recap, and a folder of speaker photos — and produce a clean, complete `demos` array that matches the existing schema in `script.js`.

Work methodically through each phase below. Do not skip phases even if input for that phase seems sparse — sparse input means you leave fields as empty strings, not that you omit them.

---

## Phase 0 — Understand what you've been given

Before doing anything, identify:

1. **Edition ID** — the user must tell you which edition (e.g. `"5"`). If they haven't, ask before proceeding.
2. **Luma CSV** — a file path or pasted CSV content from a Luma export. May be an `.xlsx` — if so, convert to readable form first using Python (`openpyxl` or `pandas`).
3. **Text dump** — free-form notes, a recap doc, a Google Doc paste, or anything describing what each speaker demoed. May be pasted inline or a file path.
4. **Photos directory** — default is `assets/events/<id>/photos/`. Scan it automatically unless the user specifies a different path.

Confirm what you have before starting. If the CSV or text dump is missing, tell the user what you can and can't populate without it.

---

## Phase 1 — Parse the Luma CSV

Luma exports vary. Use Python to read the file. Common structures:

- **Attendee export**: columns like `Name`, `Email`, `Approved`, plus custom registration question columns.
- **Guest list export**: similar but may include RSVP status.

Your goal is to extract, for each **speaker** (not every attendee):
- Full name (use as `speaker` field — first name only if that's the site convention; check existing entries in `script.js` to match style)
- Twitter / X handle or URL
- Instagram handle or URL
- Website URL

**Finding social columns:** Column headers are user-defined and unpredictable. Look for headers containing words like: `twitter`, `x.com`, `instagram`, `website`, `portfolio`, `link`, `social`, `url`, `handle`. Be case-insensitive. If multiple columns could be twitter, pick the most specific one.

**Normalising URLs:**
- If a value is a bare handle (e.g. `rasagy`), expand it: `https://x.com/rasagy` or `https://instagram.com/rasagy`.
- If a value starts with `@`, strip the `@` and expand.
- If a value is already a full URL, use it as-is.
- If a value is empty, blank, `-`, `n/a`, or just `https://x.com/` / `https://instagram.com/` with no path beyond the root, treat it as unknown → use `""`.

**Which rows are speakers:** The user may tag speakers in a column (e.g. `Role = Speaker`) or there may be no tag and you need to match by name against the text dump. If unsure, extract all approved attendees and then in Phase 3 narrow down to those who appear in the text dump.

---

## Phase 2 — Parse the text dump

The text dump is the source of truth for demo content. It could be:
- Structured notes (speaker name, then bullet points)
- A recap paragraph per demo
- A raw transcript or rough notes

For each demo, extract:
- `title` — the name of the project or talk. If absent, use `""`.
- `speaker` — match to a name from the CSV (fuzzy match: "Rama K" → "Rama Krushna"). Use the display name style from existing `script.js` entries (typically first name or first + last depending on how they appear).
- `preview` — 1–2 sentences, present tense, describing what the demo *was*. Written in the third person ("Rasagy shared…" style already used in the site). If the dump has a one-liner, use it. If only long notes exist, synthesise a tight preview.
- `details` — the longer paragraph shown in the dialog. Match the voice and length of existing entries: 3–5 sentences, third person past tense, focusing on what was shown, the key insight, and why it was interesting. If the dump is thin, write what you can from context and leave a `// TODO` comment inline.
- `demoUrl` — any URL the speaker showed or linked. If none, `""`.

**Voice guide** (match this exactly — read 3–4 existing `details` entries before writing):
- Third person past tense ("Veethika shared…", "Arjun made the case for…")
- One sentence on context/setup, one on what was shown, one on the key takeaway or insight
- No hype language ("amazing", "incredible", "fascinating") — dry and observational
- End on what made it interesting or what the room took away

---

## Phase 3 — Match photos to speakers

Scan `assets/events/<id>/photos/`. For each file:
1. Strip the extension and normalise the stem (lowercase, remove punctuation).
2. Fuzzy-match against speaker names from Phases 1 & 2. A match is confident if the stem contains the speaker's first name or a clear abbreviation (`ram` → Rama Krushna, `gyan` → Gyanl).
3. Record the filename (with extension) as the `photo` field for that speaker.
4. If no photo file matches a speaker, set `photo: ""` — do not guess.
5. List any unmatched photo files so the user can resolve them.

---

## Phase 4 — Assemble the demos array

Build a `demos` array entry for each speaker in the order they appear in the text dump (that's the running order). Shape:

```js
{
  title: "",
  speaker: "",
  speakerLinks: [
    { platform: "twitter",   url: "" },
    { platform: "instagram", url: "" },
    { platform: "website",   url: "" }
  ],
  demoUrl: "",
  photo: "",
  preview: "",
  details: ""
}
```

Rules:
- **Always include all three platforms** in `speakerLinks`, even if the URL is `""`. Empty URLs are filtered out at render time — do not omit the platform entry.
- **photo** is the bare filename (e.g. `"kenneth.jpeg"`), not a full path.
- **demoUrl** is `""` if unknown, not `null` or omitted.
- Preserve trailing spaces in titles if they exist in the source (some editors leave them — don't silently trim).

---

## Phase 5 — Write to script.js

1. Read `script.js`.
2. Find the event object with `id: "<edition-id>"`.
3. Replace its `demos: []` (or existing `demos` array) with the assembled array.
4. Do not touch any other part of the file.
5. Preserve the indentation style of the surrounding code (2-space indent, single quotes for strings — check existing entries).

After writing, read back the modified event object and print a summary table:

| Speaker | Photo matched | Social links found | Demo title |
|---|---|---|---|

Flag any gaps (missing photos, empty titles, thin details) so the user knows what to follow up on.

---

## Edge cases

- **Speaker in text dump but not in CSV** → include them with empty social links; note the gap.
- **Speaker in CSV but not in text dump** → skip them unless the user asked to include all attendees.
- **Two speakers with the same first name** → use `Speaker (Surname initial)` style, matching however other editions handle it.
- **demoUrl that's the same as a speakerLinks website** → include it in both places; they serve different UI purposes.
- **Excel file** → use `openpyxl` or `pandas` to read it. Do not ask the user to convert it first.
