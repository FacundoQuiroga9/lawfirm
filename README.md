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
