// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fels from './src/fels.tmLanguage.json' with { type: 'json' };

export default defineConfig({
	site: 'https://fels-lang.github.io',
	integrations: [
		starlight({
			title: 'Fels',
			description: 'A small systems language for people who like to know what their code does.',
			logo: { src: './src/assets/logo.svg', alt: 'Fels' },
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fels-lang/fels' }],
			customCss: ['./src/styles/fels.css'],
			editLink: { baseUrl: 'https://github.com/fels-lang/fels-lang.github.io/edit/main/' },
			lastUpdated: false,
			expressiveCode: {
				shiki: { langs: [/** @type {any} */ (fels)] },
				themes: ['github-dark-default', 'github-light-default'],
				// warm code blocks to match the site instead of the theme's blue-black
				styleOverrides: {
					codeBackground: ({ theme }) => (theme.type === 'dark' ? '#161310' : '#fbf8f2'),
					borderColor: ({ theme }) => (theme.type === 'dark' ? '#3a342e' : '#e3d9c9'),
					frames: {
						editorTabBarBackground: ({ theme }) => (theme.type === 'dark' ? '#1c1916' : '#f3ece1'),
						terminalTitlebarBackground: ({ theme }) => (theme.type === 'dark' ? '#1c1916' : '#f3ece1'),
					},
				},
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Why Fels', slug: 'start/why' },
						{ label: 'Install', slug: 'start/install' },
						{ label: 'Your first program', slug: 'start/first-program' },
						{ label: 'Overview', slug: 'docs/overview' },
						{ label: 'Packages and examples', slug: 'start/showcase' },
					],
				},
				{
					label: 'The language',
					items: [
						'docs/syntax',
						'docs/types',
						'docs/functions-control-flow',
						'docs/error-handling',
						'docs/memory-zones',
						'docs/modules-interfaces',
						'docs/attributes-builtins',
					],
				},
				{
					label: 'Compile time',
					items: ['docs/comptime', 'docs/reflection-and-constraints', 'docs/metaprogramming'],
				},
				{
					label: 'Library and C',
					items: ['docs/stdlib', 'docs/c-interop'],
				},
				{
					label: 'Std reference',
					collapsed: true,
					items: [{ autogenerate: { directory: 'std' } }],
				},
				{
					label: 'Tools',
					items: ['docs/build-system', 'docs/tooling', 'docs/packages', 'docs/testing'],
				},
				{
					label: 'Platforms',
					items: ['docs/targets-and-tiers', 'docs/linux-elf-backend', 'docs/distribution'],
				},
			],
		}),
	],
});
