// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Владимир Артюхов',
	tagline: 'Персональный сайт',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'ArtMan-8', // Usually your GitHub org/user name.
	projectName: 'artman-8.github.io', // Usually your repo name.

	plugins: ['docusaurus-plugin-sass'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				// docs: {
				// 	sidebarPath: require.resolve("./sidebars.js"),
				// },
				blog: false,
				theme: {
					customCss: [require.resolve('./src/css/custom.scss')],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Главная',
			},

			footer: {
				copyright: `Copyright © 2020-${new Date().getFullYear()}`,
			},

			prism: {
				theme: require('prism-react-renderer/themes/github'),
				darkTheme: require('prism-react-renderer/themes/dracula'),
			},
		}),
};

module.exports = config;
