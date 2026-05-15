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

4. **Add speaker photos** at `assets/events/5/photos/<filename>` (see demo object shape below).

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
