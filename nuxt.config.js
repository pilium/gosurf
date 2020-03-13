/* eslint-disable no-confusing-arrow */
/* eslint-disable no-shadow */
const shrinkRay = require('shrink-ray-current');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
	router: {
		base: '/',
		prefetchLinks: false,
	},
	mode: 'universal',
	...(!isDev && {
		modern: 'client',
	}),
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
	render: {
		http2: {
			push: true,
			pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
				.map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
		},
		compressor: shrinkRay(),
		resourceHints: false,
	},
	axios: {},
	build: {
		optimizeCss: false,
		profile: true,
		...(!isDev && {
			extractCSS: {
				ignoreOrder: true,
			},
		}),
		...(!isDev && {
			html: {
				minify: {
					collapseBooleanAttributes: true,
					decodeEntities: true,
					minifyCSS: true,
					minifyJS: true,
					processConditionalComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					trimCustomFragments: true,
					useShortDoctype: true,
				},
			},
		}),
		splitChunks: {
			layouts: true,
			pages: true,
			commons: true,
		},
		optimization: {
			minimize: !isDev,
		},
		filenames: {
			app: ({isDev}) => isDev ? '[name].js' : 'js/[contenthash].js',
			chunk: ({isDev}) => isDev ? '[name].js' : 'js/[contenthash].js',
			css: ({isDev}) => isDev ? '[name].css' : 'css/[contenthash].css',
			img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
			font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
			video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
		},
		postcss: {
			plugins: {
				...(!isDev && {
					cssnano: {
						preset: ['advanced', {
							autoprefixer: false,
							cssDeclarationSorter: false,
							zindex: false,
							discardComments: {
								removeAll: true,
							},
						}],
					},
				}),
			},
			...(!isDev && {
				preset: {
					browsers: 'cover 99.5%',
					autoprefixer: true,
				},
			}),
			order: 'cssnanoLast',
			extend(config, {isClient}) {
				if (isClient) {
					config.devtool = 'eval-source-map';
				}
			},
		},
	},
};
