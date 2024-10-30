import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  integrations: [icon(), tailwind()],
  adapter: netlify(),
});