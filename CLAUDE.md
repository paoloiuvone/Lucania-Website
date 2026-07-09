# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing website for **Lucania Contractors LLC** (a heavy civil construction firm in South Texas).
It is a **hand-written static site** — plain HTML, one CSS file, and one small JS file. There is **no
build step, no framework, no package manager, and no dependencies**. What is in the repo is exactly what
is served. It is hosted free on **GitHub Pages** at the custom domain **lucaniacontractors.com**.

## Running / previewing

- There is nothing to build or install. Open `index.html` directly in a browser to preview.
- All in-page links use **relative paths** (`assets/…`, `css/…`, `bridges-structures.html`), so the site
  works from `file://` as well as from a web server.
- `404.html` is the exception: it uses **root-relative paths** (`/css/…`, `/assets/…`) because GitHub
  Pages serves it from the domain root. Don't "fix" these to relative paths.

## Architecture & conventions

- **Every page is standalone and self-contained.** The header (`<header class="site-header">`) and footer
  (`<footer class="site-footer">`) markup is **duplicated in each HTML file** — there is no templating or
  includes. When you change navigation, contact info, or footer content, you must update **all five
  pages** (`index.html`, `bridges-structures.html`, `underground-utilities.html`, `employment.html`,
  `contact.html`) plus `404.html` where applicable. Keep them in sync.
- The **active nav link** on each page is marked with `class="is-active"` — set it to the current page.
- **All styling lives in `css/style.css`.** It uses CSS custom properties defined in `:root`; the brand
  color is `--red: #b8393e` (sampled from the company logo). Reuse existing utility classes
  (`.container`, `.section`, `.section--alt`, `.section-title`, `.btn`, `.card`, `.grid`, `.gallery`,
  `.service-list`, `.hero`) rather than adding one-off styles. Prefer editing variables over hardcoding
  colors.
- **`js/main.js` is the only JavaScript** and does one thing: toggle the mobile nav menu (and expand the
  Services submenu on small screens). Keep the site working with JS disabled — nothing essential should
  depend on it. Avoid adding libraries or heavy scripts; "fast and lightweight" is a hard requirement
  from the site owner.

## Brand assets

- `assets/logo.png` — white logo on the solid brand-red badge; used in the header (on white).
- `assets/logo-white.png` — white logo on a **transparent** background; used in the footer (on red). It
  was generated programmatically from `logo.png` by keying out the red, so it looks blank against a white
  editor background — that's expected.
- `assets/hero-1.jpg`, `assets/hero-2.jpg` — project photos used as hero backgrounds and gallery images.
  Add more project photos to `assets/` and reference them inside the `<div class="gallery">` blocks.

## Deployment (GitHub Pages)

- `CNAME` pins the site to `lucaniacontractors.com` — **do not delete it** or the custom domain breaks.
- `.nojekyll` disables Jekyll processing on GitHub Pages — keep it.
- `.gitignore` excludes `.claude/` (local preview config) — that folder is dev-only and must not be relied
  on in production.
- Deploying = pushing to the `main` branch; GitHub Pages publishes the repo root within ~1 minute.
- Full step-by-step publishing and DNS instructions live in `README.md`.

## Contact form

- The form in `contact.html` POSTs to **FormSubmit** (`https://formsubmit.co/admin@lucaniacontractors.com`),
  a free no-account service. It requires a **one-time email activation** on first submission after going
  live. If the recipient email changes, update the `action` URL in `contact.html`.

## Content source of truth

The text, services, positions, and contact details mirror the company's prior Wix site. When adding
content, match the existing plain, professional tone. Keep contact details consistent everywhere:
phone `956-890-6069`, email `admin@lucaniacontractors.com` (HR: `hr@lucaniacontractors.com`), mailing
address `P.O. 2806, Mission, TX 78572`.
