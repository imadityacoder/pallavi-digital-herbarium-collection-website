# Digital Herbarium Collection

A premium digital botanical museum built with React 19, Vite, Tailwind CSS, Framer Motion, and shadcn/ui. Showcases a curated collection of preserved plant specimens for educational exhibition.

## Features

- Fullscreen hero with glassmorphism student card and floating leaf animations
- Searchable, filterable plant collection gallery
- Dynamic plant detail pages with lightbox image viewer
- Animated statistics counters and scroll-triggered reveals
- Fully responsive mobile-first design (320px–1440px+)
- GitHub Pages deployable with SPA routing support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Adding Plant Photos

Place your images in the following structure under `public/assets/plants/`:

```
public/assets/plants/
├── ricinus-communis/
│   ├── thumb.jpg       # Gallery thumbnail
│   ├── plant.jpg       # Live plant photograph
│   └── herbarium.jpg   # Herbarium specimen sheet
├── tabernaemontana-divaricata/
│   └── ...
└── (one folder per plant slug)
```

**Plant slugs:** `ricinus-communis`, `tabernaemontana-divaricata`, `catharanthus-roseus`, `euphorbia-hirta`, `rottboellia-cochinchinensis`, `sphagneticola-trilobata`, `cyanthillium-cinereum`, `coccinia-grandis`, `plumeria-pudica`

## Updating Student Information

Edit the student info in:
- `src/components/Hero.jsx` — glassmorphism card
- `src/components/Footer.jsx` — footer section

## Deploy to GitHub Pages

1. Update the repo name in `package.json` deploy script:

```json
"predeploy": "VITE_BASE_PATH=/YOUR-REPO-NAME/ npm run build"
```

2. Create a GitHub repository and push your code.

3. Deploy:

```bash
npm run deploy
```

4. In GitHub repo **Settings → Pages**, set source to the `gh-pages` branch.

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- React Router v7
- shadcn/ui + Radix UI
- Lucide React Icons

## Project Structure

```
src/
├── components/     # UI components
├── pages/          # Home and PlantDetails
├── data/           # Plant database
├── routes/         # Router configuration
├── hooks/          # Custom hooks
└── lib/            # Utilities
```

## License

Biology Project — B.N. College, Academic Session 2025–2026
