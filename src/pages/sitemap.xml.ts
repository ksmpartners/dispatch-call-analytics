// One-page sitemap, built from `site` + `base` in astro.config.mjs.
// Submit https://www.ksmpartners.com/dispatch-call-analytics/sitemap.xml in Google Search Console.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const home = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), site).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${home}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
