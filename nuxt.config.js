module.exports = {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
	},
	loading: {color: '#fff'},
	css: [
		{src: '@/theme/variables.scss', lang: 'scss'},
		{src: '@/theme/index.scss', lang: 'scss'},
		'swiper/dist/css/swiper.css',
	],
	plugins: [{src: '@/plugins/slider.js', mode: 'client'}],
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/stylelint-module',
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/dotenv',
		'@nuxtjs/svg-sprite',
		'nuxt-webfontloader',
	],
	webfontloader: {
		google: {
			families: ['Fira+Sans:100,300,400,500,900&display=swap'],
		},
	},
	axios: {},
	build: {
		extend(config, {isClient}) {
			if (isClient) {
				config.devtool = 'eval-source-map';
			}
		},
	},
};
