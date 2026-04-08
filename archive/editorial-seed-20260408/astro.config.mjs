// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CORTEX Persist',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/borjamoskv' }],
			sidebar: [
				{
					label: 'Core Protocol',
					items: [
						{ label: 'Sovereign Manifesto', slug: 'index' },
					],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Architecture',
					autogenerate: { directory: 'architecture' },
				},
				{
					label: 'Security & Quality',
					autogenerate: { directory: 'security' },
				},
			],
		}),
	],
});
