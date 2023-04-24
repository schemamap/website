import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://schemamap.io',
  integrations: [sitemap(), prefetch()]
});