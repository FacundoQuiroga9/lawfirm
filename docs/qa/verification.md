# Verification — 2026-09-15

## Latest subtitle adjustment

Removed the visible highlight-selection subtitle and its unused CSS/data field.
The accessible carousel label is now “Client reviews”. Individual ratings,
quotes, original comments and Google links remain unchanged. Lint/build pass.

## Current highlight presentation

At the user's request, the 11 full comments are now represented by short,
verbatim excerpts. Full originals and source links remain in the central data;
the full-review link is visible on each slide. Read more, expansion state,
clamping and their reserved space have been removed.

- Lint and build passed; all 14 tests passed after updating the excerpt contract.
- Every excerpt is a literal substring of its original comment.
- All 11 slides were cycled in Chrome at 1440 × 900 and 320 × 640.
  Their card heights remained fixed at 386.953px and 420.953px respectively.
  Every quote fit its measured slot in full; no line clamp or horizontal overflow.
- Visual inspection at 390 × 844 showed the complete reviews panel, including
  heading, quote and controls, fitting the viewport without clipping.
- Desktop card height decreased from 549.953px to 386.953px while preserving
  the panel appearance, left intro, type sizes, colors and controls.
- Current build: JS 181.67 kB / 58.73 kB gzip; CSS 34.89 kB / 7.59 kB gzip.
- Screenshots: [desktop highlights](screenshots/review-highlights-desktop.png),
  [mobile highlights](screenshots/review-highlights-mobile.png),
  [before highlights](screenshots/before-review-highlights.png).

The remaining sections document the initial full-review implementation and its
verification history. Expansion-related observations below are historical; the
current UI uses complete short quotes with no expansion control.


## Baseline and scope

Baseline: `ded1ef5616fc62f4c13fa95143d3350207b69fa2`. Section components,
shared styles, centralized content, map, navigation logic and responsive rules
were inspected before the initial animation work. Baseline lint/build passed.
Screenshots before that initial work were unavailable because browser access
was not connected. The screenshot `screenshots/before-review-import.png` records
the existing animation implementation before the real reviews were imported;
it is **not** a screenshot of the pre-animation baseline.

The user connected Chrome on 2026-09-15. All 15 Google reviews were inspected;
all 11 matching the latest criteria are now imported. See
[the source audit](../google-reviews-audit.md).

## Automated checks

- `npm run lint`: passed, no warnings.
- `npm run build`: passed. JS 181.64 kB / 58.84 kB gzip; CSS 35.55 kB / 7.71 kB gzip.
- `node --test tests/*.test.mjs`: 14 passing tests.
- The tests cover circular navigation; zero/one/many data cases; all independent
  pause reasons; persistent manual pause; reading expansion; silent autoplay;
  horizontal swipe versus vertical movement/taps; source verification, duplicate
  IDs, comment requirements and excluded authors; exact text and HTML escaping;
  source links, accessible labels and reduced-motion controls.
- A defensive component test still covers a directly injected rating-only fixture,
  although the production data selector excludes all blank comments.
- Imported records were compared with the captured Google DOM data. IDs, names,
  rating, complete text, paragraph breaks, date labels and direct links match.
- Firm, navigation, hero, practice, About and contact content were compared to
  the baseline. All remain identical, including the complete About text.

## Browser checks performed in connected Chrome

| Viewport | Observations |
| --- | --- |
| 1440 × 900 desktop | Intro stays left; one active slide; all 11 records cycled; fixed 549.953px collapsed card height and stable intro position across all records; manual pause persists |
| 768 × 1024 tablet | Single-column reviews; no horizontal overflow; hero portrait ends at the bottom edge with final transform `none` |
| 390 × 844 mobile | Complete text expands without clipping; Read less restores collapsed state; controls and original single-column composition remain usable |
| 320 × 640 mobile | Document width equals viewport; 44px controls fit in a 241px card; mobile menu opens and Home navigation closes it |
| 1366 × 600 short desktop | No horizontal overflow; 100px header; hero portrait ends at viewport bottom; navigation targets remain below the header |

Additional browser observations:

- Autoplay advanced from 01 to 03 while focus was outside the card.
- Previous/next and Enter activation work; traversal wraps after the 11th review.
- Only one active slide is exposed after transitions. Manual movement announces
  position; autoplay leaves the live status empty.
- Manual pause survived all 11 transitions and expansion/collapse.
- chris V's expanded DOM text matched the captured full Google comment exactly.
- Found and fixed an internal scrolling issue when collapsing a long review:
  the decorative panel's `overflow: hidden` allowed focus scrolling it by 150px.
  `overflow: clip` preserves the same visual clipping without creating a scroll
  container. Retesting expansion/collapse returned panel scrollTop to zero and
  removed the resulting blank area/hidden title.
- Home, Services and About navigation were exercised; the mobile menu was opened
  and closed by navigation. Phone and email hrefs were inspected and preserved;
  no actual telephone call or email was sent. The Google map rendered successfully.
- Service card pointer interaction activates the light and elevation treatment.
- Chrome's captured warning/error log was empty.

## Motion implementation and verification limits

No animation library was added. CSS and native Web Animations API supply the
coordinated entrances, decorative parallax, service interaction and 460ms review
transitions. Both portrait entrances finish with transform `none`; parallax is
limited to existing decorative elements, at most 26px in either direction.

Autoplay uses an 8-second timeout. Hover, focus, touch, expanded text, offscreen,
hidden-tab, manual pause and reduced motion independently block it. Timers,
observers, event listeners and animation frames have cleanup paths.

Reduced-motion CSS/JavaScript, individual pause conditions and swipe recognition
passed automated logic/markup checks and source review. Native touch gestures,
live OS reduced-motion switching and each browser-specific transient pause were
not independently exercised with hardware/emulation in this session. Do not
interpret server-render tests as executing browser effects. There is no measured
frame-rate, loading-time or CLS performance report; bundle sizes above are transfer
sizes only. The site makes no runtime request to fetch reviews.

## Screenshots

- [Before review import](screenshots/before-review-import.png)
- [Desktop reviews](screenshots/reviews-desktop.png)
- [Mobile reviews](screenshots/reviews-mobile.png)
- [Tablet hero](screenshots/hero-tablet.png)
- [Short-screen hero](screenshots/hero-short-screen.png)
