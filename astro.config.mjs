// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
const siteUrl = process.env.SITE_URL ?? 'https://cortexpersist.com';

export default defineConfig({
	site: siteUrl,
	integrations: [
		starlight({
			title: 'CORTEX Docs',
			description: 'Trust infrastructure for autonomous AI.',
			logo: {
				src: './src/assets/logo-white.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/borjamoskv/Cortex-Persist' }],
			sidebar: [
				{
					label: 'Documentation',
					autogenerate: { directory: '' },
				},
			],
		}),
	],
});
