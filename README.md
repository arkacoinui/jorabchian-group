# Joorabchian Group — React app

Migrated from the original static HTML export. Built with Vite + React 18, CSS Modules.

## Setup

```
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — page composition
- `src/components/` — one component + `.module.css` per section
- `src/data/siteData.js` — repeated content (nav links, cards, workflow steps, etc.) extracted to data
- `public/images/` — collaboration section background images
