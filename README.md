# Dispatch Call Analytics website

Product site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/dispatch-call-analytics/

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | All page sections and copy (features, departments, compliance, entities) |
| `src/components/DemoDialog.astro` | "Request a demo" form (Formspree `xojndjkw`, same as the KSM Partners contact page) |
| `src/components/ScreenFrame.astro` | Screenshot window frame; images are converted to responsive WebP at build |
| `src/lib/nerc.ts` | Links to NERC and the COM-002-4 standard; every mention in the page copy uses these |
| `src/assets/screens/` | Product screenshots (personal email addresses removed) |
| `src/styles/global.css` | Theme colors, buttons, scroll animations |
| `public/` | Favicons and the social-preview image |
| `brand/` | Logo source files (SVG lockups, icon, favicon, touch icon, social image) |

## Deploy

1. Create a GitHub repository named `dispatch-call-analytics` (under `ksmpartners`).
2. Push this folder to its `main` branch.
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` runs `.github/workflows/deploy.yaml` and publishes to
https://www.ksmpartners.com/dispatch-call-analytics/
(the ksmpartners GitHub Pages custom domain; ksmpartners.github.io/dispatch-call-analytics/ redirects there)

If the repository name or owner differs, update `site` and `base` in `astro.config.mjs`.
