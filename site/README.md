# Ready Jet Roam — coded site (skeleton)

A working, no-build static skeleton of the rebuilt `readyjetroam.com`, built
the same way as the safety-guide landing page: hand-coded HTML + one shared
stylesheet, deployed from GitHub. This is a **starting point to react to**, not
the finished site — the structure, design system, and components are real; the
copy and images are placeholders.

## What's here

```
site/
├── index.html                 Homepage — Lisa + the four funnel paths,
│                              swappable product spotlight, category grid,
│                              testimonials (both treatments), newsletter band
├── about.html                 About Lisa
├── articles/
│   ├── index.html             Article library landing
│   └── choosing-travel-insurance.html   A full example article
├── _templates/
│   └── article.html           Blank article template — copy this per article
├── assets/
│   ├── theme.css              THE design system — tokens + every component
│   ├── rjr.js                 Mobile nav + GA4 conversion tracking
│   └── img/                   Placeholder images (swap for Lisa's photos)
└── README.md                  This file
```

## How it maps to the brief

- **One design system, no seams** — every token (colour, type, spacing,
  buttons) lives once in `assets/theme.css`, extracted from the landing page /
  packing-app aesthetic. Change it there, the whole site updates.
- **Four funnel paths** — books, newsletter, packing guide, packing app, each a
  card with one obvious next step. Newsletter is the emphasised action.
- **Product spotlight** — the block marked `data-block="product-spotlight"` in
  `index.html` is the *five-minute swap*: change the cover, pill, headline, two
  lines, quote, price, and button href. No layout or CSS touched. The
  "Also from us" row sits right beneath it.
- **Testimonial component, two treatments** — `.tq` (styled pull-quote) and
  `.mailcard` (framed screenshot/DM). Both are on the homepage and available in
  the article template.
- **Article system** — `_templates/article.html` has the strong intro,
  affiliate content blocks (with disclosure), inline + banded newsletter CTAs,
  testimonial slot, and related articles. `choosing-travel-insurance.html` shows
  it filled in.
- **Categories** — the five revenue-stream categories from the brief are the
  homepage grid and the articles landing.
- **Measurement (Phase 4)** — add a GA4 Measurement ID (see below) and outbound
  affiliate clicks, shop clicks, newsletter signups, and guide downloads track
  automatically via `data-evt` attributes. No per-link JS.

## Editing it

- **Add an article:** copy `_templates/article.html` into `articles/your-slug.html`,
  fill in the `{{PLACEHOLDERS}}`, and add a card to `articles/index.html`.
- **Swap the featured product:** edit the `data-block="product-spotlight"` block
  in `index.html` only.
- **Global change (nav, colour, footer):** edit `assets/theme.css` for styling.
  The header and footer *markup* is currently duplicated per page (marked
  `SHARED HEADER` / `SHARED FOOTER`) — change one, then mirror it. See "Growing
  up" below for when to automate that.

### Turn on analytics
In each page's `<head>` there's a commented GA4 snippet. Paste your Measurement
ID (`G-XXXXXXX`) in and uncomment it. Events start flowing immediately; see
`assets/rjr.js` for the list.

## Previewing locally
It's plain static files — open `site/index.html` in a browser, or:
```
cd site && python3 -m http.server 8000   # then visit localhost:8000
```

## Deploying
Two clean options, both "push to GitHub → live":
1. **Managed static host (recommended):** connect this repo to Cloudflare Pages,
   Netlify, or GitHub Pages with the publish directory set to `site/`. HTTPS and
   CDN handled; nothing to maintain.
2. **DreamHost:** run the manual workflow in `.github/workflows/deploy-site.yml`
   (rsync over SSH). Wire the secrets noted in that file first.

When ready to go live, point `readyjetroam.com` DNS at the new host. Add a
`404 → homepage` redirect rule at the host and preserve any keeper article URLs
(brief, Phase 3).

## Growing up (optional, later)
The one thing that scales awkwardly with pure static files is the duplicated
header/footer. The day that gets annoying, a lightweight build step
(Eleventy or Astro) lets you write the header/footer/design **once** as a
component and keep each article as a short content file — same design system,
same GitHub→host deploy. Nothing here blocks that move; the CSS and structure
carry straight over.
