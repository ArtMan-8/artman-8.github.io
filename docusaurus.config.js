// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Владимир Артюхов',
	tagline: 'Персональный сайт',
	url: 'https://artman-8.github.io/',
	baseUrl: '/',
	trailingSlash: false,
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'ArtMan-8', // Usually your GitHub org/user name.
	projectName: 'artman-8.github.io', // Usually your repo name.
	deploymentBranch: 'gh-pages',

	plugins: ['docusaurus-plugin-sass'],

	i18n: {
		defaultLocale: 'ru',
		locales: ['ru'],
		localeConfigs: {
			ru: {
				label: 'Russian',
				direction: 'ltr',
				htmlLang: 'ru',
			},
		},
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				// docs: {
				// 	sidebarPath: require.resolve("./sidebars.js"),
				// },
				docs: false,

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
				hideOnScroll: true,
			},

			footer: {
				copyright: `Copyright © 2020-${new Date().getFullYear()} Vladimir Artyukhov`,
			},

			prism: {
				theme: require('prism-react-renderer/themes/github'),
				darkTheme: require('prism-react-renderer/themes/dracula'),
			},
		}),
};

module.exports = config;
