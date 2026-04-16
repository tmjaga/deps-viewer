# Changelog

All notable changes to this project will be documented in this file.

---

## 1.0.0 (2026-04-16)


### Features

* initialize deps-viewer project with Vite, Alpine.js, and basic styling ([fb3ed40](https://github.com/tmjaga/deps-viewer/commit/fb3ed400ea71a1940939dbecc9578eeae2de2626))
* update README ([8f5a07d](https://github.com/tmjaga/deps-viewer/commit/8f5a07d4e074fdd133efba6e2bfaf431dc8f30ce))


### Bug Fixes

* release workflow fixed ([b3ff0a9](https://github.com/tmjaga/deps-viewer/commit/b3ff0a92a07c1ebc4acdf16179b100e1e604cc63))
* update branch name from main to master in release workflow ([c52b17e](https://github.com/tmjaga/deps-viewer/commit/c52b17eec7f6c30bab6ff4d930a0199e6f81b7ed))
* update release-please action ([03ee143](https://github.com/tmjaga/deps-viewer/commit/03ee143c9deb227fa6c165a405c9652805bfb8fb))

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
