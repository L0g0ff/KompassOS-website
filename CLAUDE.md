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
- **`styles.css`** — All styling. Uses CSS custom properties defined in `:root` for theming (accent: `#1abc9c`, background: `#111a20`). Motion is CSS-only: aurora backdrop, 3D hero screenshot, scroll progress bar and compass needle. The scroll-linked parts use scroll-driven animations inside `@supports (animation-timeline: scroll())`; other browsers get the static layout. Single responsive breakpoint at 900px.
- **`script.js`** — Vanilla JS for the mobile menu toggle, plus an `IntersectionObserver` that adds `.in-view` to sections (scroll reveal and the terminal typing animation). It sets `.js` on `<html>` only when reduced motion is not requested.

## Key Conventions

- Pure HTML/CSS/JS — no frameworks, preprocessors, or bundlers
- Fonts: system Noto Sans / Noto Sans Mono stack, no web fonts
- All motion must respect `prefers-reduced-motion`
- Commit messages follow conventional format: `add:`, `fix:`, `change:`, `remove:`
- Assets live in `assets/` (SVG icons, PNG hero image, logos)
