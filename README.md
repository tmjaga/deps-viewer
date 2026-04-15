# DepsViewer {}

> Paste your `composer.json` and/or `package.json` — get clean, enriched dependency info instantly.

DepsViewer is a lightweight, zero-backend tool for visualizing PHP (Composer) and JavaScript (NPM) project dependencies. Drop in your manifest files and get live-fetched package descriptions, latest versions, and at-a-glance stats — all in a clean, filterable UI.

---

## Features

- **Dual ecosystem support** — analyze PHP/Composer and NPM/Node packages side by side
- **Live package data** — fetches descriptions and latest versions from [Packagist](https://repo.packagist.org) and the [NPM registry](https://registry.npmjs.org) in real time
- **Paste or upload** — type/paste JSON directly or upload your manifest files
- **Prod/Dev filtering** — toggle between production, dev, and all packages
- **Live search** — filter packages by name or description instantly
- **Progress tracking** — animated progress bar while packages are being fetched
- **Skeleton loading** — cards render immediately with placeholders while data loads
- **Zero backend** — entirely client-side; no server, no build step needed for the viewer itself

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Reactivity | [Alpine.js](https://alpinejs.dev/) v3 |
| Fonts | Space Mono + Syne via Google Fonts |
| Bundler | [Vite](https://vitejs.dev/) |
| PHP data | Packagist API (`repo.packagist.org/p2`) |
| NPM data | NPM Registry API (`registry.npmjs.org`) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/deps-viewer.git
cd deps-viewer
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output is placed in the `dist/` folder — ready to deploy to any static host (GitHub Pages, Netlify, Vercel, etc.).

### Preview Build

```bash
npm run preview
```

Serves the production build locally for final verification.

---

## Usage

1. **Paste** your `composer.json` into the PHP panel and/or your `package.json` into the NPM panel, **or** click the file input to upload the files directly.
2. Click **▶ Analyze**.
3. DepsViewer fetches live metadata for every package and renders cards with:
   - Package name (linked to Packagist / npmjs.com)
   - Description
   - Required version range
   - Latest published version
   - `dev` badge for dev-only dependencies
4. Use the **search box** and **All / Prod / Dev** filter chips to narrow results.
5. Click **Clear** to reset and start over.

---

## Project Structure

```
deps-viewer/
├── index.html        # App shell + Alpine.js component logic
├── js/
│   └── app.js        # Alpine bootstrap + Google Fonts injection
├── styles.css        # All styles
├── package.json      # Project metadata & scripts
└── vite.config.js    # (optional) Vite configuration
```

---

## License

ISC
