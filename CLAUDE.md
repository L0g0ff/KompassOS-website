# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **KompassOS**, a developer-friendly KDE Operating System based on Aurora (Universal Blue). Hosted on GitHub Pages at `www.kompassos.nl`.

## Development

This is a static website with no build system, package manager, or dependencies. There are no tests, linters, or formatters configured.

- **To develop**: Open `index.html` in a browser, or use a local server (e.g., VS Code Live Server)
- **To deploy**: Push to `main` branch (GitHub Pages auto-deploys)
- **Custom domain**: Configured via `CNAME` file (`www.kompassos.nl`)

## Architecture

Three source files make up the entire site:

- **`index.html`** — Single-page layout with sections: hero, features, dev tools, apps, hardware support, download. Navigation anchors link to section IDs (`#features`, `#tools`, `#apps`, `#hardware`, `#download`).
- **`styles.css`** — All styling. Uses CSS custom properties defined in `:root` for theming (primary: `#1abc9c`, accent: `#9b59b6`, background: `#1B2B34`). Glassmorphism effects via `backdrop-filter: blur()`. Responsive breakpoints at 768px and 1200px.
- **`script.js`** — Vanilla JS for: mobile hamburger menu toggle, smooth scroll navigation, header hide/show on scroll direction, and scroll-triggered fade-in animations (dynamically injected CSS).

## Key Conventions

- Pure HTML/CSS/JS — no frameworks, preprocessors, or bundlers
- Font: Inter (loaded from Google Fonts)
- Some CSS comments are in Dutch (e.g., "Navigatiebalk aanpassing")
- Commit messages follow conventional format: `add:`, `fix:`, `change:`, `remove:`
- Assets live in `assets/` (SVG icons, PNG hero image, logos)
