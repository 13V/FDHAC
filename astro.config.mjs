// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.factorydirecthomeair.com.au',
  // Keep the same clean URLs as the current site (e.g. /price-list, no trailing slash).
  trailingSlash: 'never',
  build: { format: 'file' },
  // Keep source whitespace: compression drops the space before links that start on a new line.
  compressHTML: false,
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|404)$/.test(page.replace(/\/$/, '')),
    }),
  ],
});
