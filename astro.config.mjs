// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '软件学社 Software House',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/XMU-Software-House/' }],
			sidebar: [
				{
					label: '关于我们',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '关于我们', slug: 'guides/example' },
					],
				},
				{
					label: '加入我们',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
