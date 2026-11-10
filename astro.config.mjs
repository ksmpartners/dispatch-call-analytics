// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site. The ksmpartners account's Pages use the custom domain
// www.ksmpartners.com, so ksmpartners.github.io/<repo>/ redirects to www.ksmpartners.com/<repo>/.
// `site` must be the final address so canonical, social and sitemap URLs don't point at a redirect.
// If the repository name or owner changes, update `site` and `base` here.
export default defineConfig({
  output: 'static',
  site: 'https://www.ksmpartners.com',
  base: '/dispatch-call-analytics',
  vite: { plugins: [tailwindcss()] },
});
