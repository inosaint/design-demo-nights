# Design Demo Nights

A no-build static site for documenting Design Demo Nights events in Bengaluru.

**Live site:** [designdemonights.com](https://designdemonights.com)

All content lives in `script.js`. No build step — just edit and push.

## Adding a new edition

1. **Add an event object** to the top of the `events` array in `script.js` (newest first):

```js
{
  id: "5",
  title: "Design Demo Nights 05",
  startsAt: "2026-08-10T18:30:00+05:30",  // IST datetime
  location: "Bengaluru",
  themeColor: "#hexcolor",                 // accent color for the edition
  applyUrl: LUMA_URL,                      // while upcoming; remove once past
  demos: []                                // fill in after the event
},
```

2. **If the event is upcoming**, set `startsAt` to a future date — it will automatically appear in the upcoming section. Add `applyUrl: LUMA_URL` (or a direct link).

3. **Once the event is past**, fill in the `demos` array and remove `applyUrl`. The event will move to the archive automatically.

4. **Add speaker photos** at `assets/events/<id>/photos/<filename>` (see demo object shape below and the photo workflow further down).

### Demo object shape

```js
{
  title: "Demo title",
  speaker: "Speaker name",
  speakerLinks: [
    { platform: "twitter",   url: "https://x.com/handle" },
    { platform: "instagram", url: "https://instagram.com/handle" },
    { platform: "website",   url: "https://example.com" }
  ],
  demoUrl: "https://example.com",   // optional; shows a "View demo" button
  photo: "filename.jpg",            // optional; filename inside assets/events/<id>/photos/
  preview: "One or two sentence summary shown on the card.",
  details: "Longer description shown in the dialog when the card is clicked."
}
```

Include all three `speakerLinks` platforms for every speaker — leave `url` as `""` for any that aren't known yet. Empty URLs are filtered out and won't render.

Supported `platform` values: `twitter`, `instagram`, `website`.

## Speaker photos

Photos come off phones as 4:3 landscape; the site's card and dialog frames want
**1600x900 (16:9)**, and the venue is dark enough that most frames need an
exposure lift. `tools/crop-review.py` handles both, with a browser step so the
framing and treatment get approved before anything lands in `assets/`.

```sh
# 1. Build a review page from a folder of originals (HEIC is fine)
python3 tools/crop-review.py 6 ~/Downloads/ddn6-photos
```

It opens a page with one card per photo, ordered by EXIF capture time — which is
the running order of the night, so it doubles as a reminder of who went when.
Drag a photo up or down to reframe it, and slide the exposure; the preview
applies the exact gamma and contrast the export will use, so what you see is what
gets written. Hit **Copy approvals**, then:

```sh
# 2. Write the approved 1600x900 crops into assets/events/6/photos/
python3 tools/crop-review.py 6 --apply
```

Filenames come from the source stem, lowercased — `Nomeshwari.HEIC` becomes
`nomeshwari.jpeg`, which is what `photo:` in `script.js` should reference.

Needs ImageMagick (`brew install imagemagick`). Review output lands in
`.crop-review/`, which is gitignored — keep the originals somewhere outside the
repo, since only the cropped versions get committed.

## Updating the apply URL

The Luma calendar URL is defined once at the top of `script.js`:

```js
const LUMA_URL = "https://luma.com/calendar/...";
```

Change it there and every upcoming event referencing `LUMA_URL` will update automatically. If a specific event needs its own link, set `applyUrl` directly on that event object instead.

## Analytics

PostHog is included via the snippet in `index.html`. The following events are tracked:

| Event | Fired when |
|---|---|
| `apply_clicked` | Upcoming event Apply button is clicked |
| `demo_card_clicked` | A speaker card in the archive is opened |
| `speaker_link_clicked` | A social link inside the dialog is clicked |
| `demo_link_clicked` | The "View demo" button inside the dialog is clicked |
| `monitor_toggled` | The logo monitor is powered on or off |

## Deployment

Served from the repository root via GitHub Pages with the custom domain `designdemonights.com`. No build command needed.
