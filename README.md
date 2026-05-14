# Design Demo Nights

A no-build static site for documenting Design Demo Nights events. All content lives in `script.js`. No build step — just edit and push.

## Adding a new edition

1. **Add an event object** to the top of the `events` array in `script.js` (newest first):

```js
{
  id: "event-05",
  title: "Design Demo Nights 05",
  startsAt: "2026-08-10T18:30:00+05:30",  // IST datetime
  location: "Bengaluru",
  theme: "Your theme here",
  themeColor: "#hexcolor",                 // accent color for the edition
  applyUrl: LUMA_URL,                      // while upcoming; remove once past
  demos: []                                // fill in after the event
},
```

2. **If the event is upcoming**, set `startsAt` to a future date — it will automatically appear in the upcoming section. Add `applyUrl: LUMA_URL` (or a direct link).

3. **Once the event is past**, add a `recap` string and fill in the `demos` array. Remove `applyUrl`. The event will move to the archive automatically.

4. **Add a cover image** at `assets/events/event-05/cover.png` (used externally, e.g. Luma).

### Demo object shape

```js
{
  title: "Demo title",
  speaker: "Speaker name",
  speakerLinks: [
    { platform: "twitter", url: "https://x.com/handle" },
    { platform: "website", url: "https://example.com" }
  ],
  demoUrl: "https://example.com",   // optional; shows a "View demo" button
  preview: "One or two sentence summary shown on the card.",
  details: "Longer description shown in the dialog when the card is clicked."
}
```

Supported `platform` values: `twitter`, `instagram`, `website`.

## Updating the apply URL

The Luma calendar URL is defined once at the top of `script.js`:

```js
const LUMA_URL = "https://luma.com/calendar/...";
```

Change it there and every upcoming event referencing `LUMA_URL` will update automatically. If a specific event needs its own link, set `applyUrl` directly on that event object instead.

## Showing / hiding the upcoming section

The upcoming section is toggled by one line near the bottom of `script.js`:

```js
// renderUpcoming();   ← uncomment to show the upcoming event card
renderArchive();
```

## GitHub Pages

Serve from the repository root. No build command needed.
