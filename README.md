# Marc J. Fratter Law Website

Static React site built with Vite.

## Project Structure

- `src/data/siteContent.js`: shared firm, navigation, hero, services, about, and contact content.
- `src/components/`: React sections and shared UI components.
- `public/images/`: static images served by Vite.

## Commands

- `npm run dev`: start the local development server.
- `npm run lint`: run ESLint.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: preview the production build locally.

## Google Maps

The Contact section builds a Google Maps iframe embed URL from the centralized
office address. Google resolves it to its native `google.com/maps/embed` view,
so the site does not need a JavaScript mapping library or a project API key.
The address and external Google Maps link remain centralized in
`src/data/siteContent.js`.

## Motion and Google reviews

Motion uses CSS and the browser's Web Animations API, with no new runtime
library. Reduced motion disables entrances, decorative parallax, cursor tilt
and automatic review rotation.

The reviews section reads a static, audited collection from
`src/data/googleReviews.js` via `siteContent.js`. See
[review provenance and import instructions](docs/google-reviews-audit.md).
The verified snapshot contains all 11 eligible reviews from the 15 Google entries
inspected on 2026-09-15: five stars with a comment, excluding Facundo Quiroga and
Brittney Justice as requested. Original text and direct review links are preserved.
Each record also has a manually selected, verbatim `excerpt`; the carousel shows
that highlight in full, without truncation or Read more, and links to the full review.

Run `node --test tests/*.test.mjs` for carousel logic and React markup checks.
See [verification status and browser checklist](docs/qa/verification.md) for
completed automated checks and browser validation.
