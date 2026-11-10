<div align="center">

<a href="https://www.ksmpartners.com/dispatch-call-analytics/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/dca-logo.svg" />
    <img src="brand/dca-logo-light.svg" alt="Dispatch Call Analytics" width="360" />
  </picture>
</a>

### Find any control-room call by what was said.

Transcribe control-room call recordings, see who spoke when, and find any call by what was said,<br />
when and on which line, then play it from that exact moment.

[![Deploy](https://github.com/ksmpartners/dispatch-call-analytics/actions/workflows/deploy.yaml/badge.svg)](https://github.com/ksmpartners/dispatch-call-analytics/actions/workflows/deploy.yaml)
[![Live site](https://img.shields.io/badge/live-ksmpartners.com%2Fdispatch--call--analytics-22D3EE?logo=googlechrome&logoColor=white)](https://www.ksmpartners.com/dispatch-call-analytics/)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Built on Databricks](https://img.shields.io/badge/Built_on-Databricks-F59E0B?logo=databricks&logoColor=white)](https://www.ksmpartners.com/dispatch-call-analytics/#databricks)

<a href="https://www.ksmpartners.com/dispatch-call-analytics/">
  <img src="brand/og-image.png" alt="Dispatch Call Analytics website preview" width="760" />
</a>

</div>

---

This repository is the product website for **Dispatch Call Analytics**, a product of [KSM Technology Partners](https://www.ksmpartners.com). It is a static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and published with GitHub Pages.

**Live:** https://www.ksmpartners.com/dispatch-call-analytics/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/dispatch-call-analytics/

To let others on your network see it, run `npx astro dev --host 0.0.0.0` and share the network URL it prints.

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | All page sections and copy (features, departments, compliance, entities) |
| `src/components/DemoDialog.astro` | "Request a demo" form (Formspree `xjywbglv`; if the form restricts domains, it must allow `www.ksmpartners.com`) |
| `src/components/ScreenFrame.astro` | Screenshot window frame; images are converted to responsive WebP at build |
| `src/lib/nerc.ts` | Links to NERC, COM-002-4 and COM-003-1; every mention in the page copy uses these |
| `src/layouts/Layout.astro` | Page head: SEO, social-preview tags and structured data |
| `src/pages/sitemap.xml.ts` | Sitemap for search engines |
| `src/assets/screens/` | Product screenshots (personal email addresses removed) |
| `src/styles/global.css` | Theme colors, buttons, scroll animations |
| `public/` | Favicons and the social-preview image |
| `brand/` | Logo source files (see below) |

## Brand

| File | Use |
|---|---|
| `brand/dca-logo.svg` | Horizontal logo for dark backgrounds (used on the site) |
| `brand/dca-logo-light.svg` | Horizontal logo for light backgrounds |
| `brand/dca-logo-stacked.svg` | Stacked logo, icon above the wordmark |
| `brand/dca-icon.svg` | App icon on its own |
| `brand/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and home-screen icons |
| `brand/og-image.png` | 1200×630 social-preview image |

Colors: background `#070B16`, cyan `#22D3EE`, blue `#3B82F6`, amber playhead `#F59E0B`. Type: Inter.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yaml` and publishes to
https://www.ksmpartners.com/dispatch-call-analytics/ in about a minute.

The ksmpartners GitHub Pages use the custom domain `www.ksmpartners.com`, so
`ksmpartners.github.io/dispatch-call-analytics/` redirects there. Pages is set to
**Source: GitHub Actions** with HTTPS enforced. If the repository name or owner
changes, update `site` and `base` in `astro.config.mjs`.

---

<div align="center">
  <sub>A product of <a href="https://www.ksmpartners.com">KSM Technology Partners</a></sub>
</div>
