# Changelog

All notable changes to this project will be documented in this file.

---

## [1.0.0] - 2025-04-16

### Added

- Dual ecosystem support — analyze PHP/Composer and NPM/Node packages side by side
- Live package data — fetches descriptions and latest versions from Packagist and the NPM registry in real time
- Paste or upload input — type/paste JSON directly or upload manifest files via file input
- Prod/Dev filtering — toggle between production, dev, and all dependencies
- Live search — filter packages by name or description instantly
- Package cards with name (linked to Packagist / npmjs.com), description, required version range, latest published version, and `dev` badge for dev-only dependencies
- Zero-backend architecture — entirely client-side, no server or build step required for the viewer
- Vite-based build pipeline with `dev`, `build`, and `preview` scripts
- Alpine.js v3 for UI reactivity
- Space Mono + Syne fonts via Google Fonts
