import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
	output: 'server',
	adapter: node({
		mode: "standalone"
	}),
	integrations: [icon(), tailwind()],
});