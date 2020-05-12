/* eslint-disable no-shadow */
export const state = () => ({
	slidesData: [
		'South Shore',
		'North Shore',
		'West Shore',
		'East Shore',
	],
	surfSlider: [
		{
			title: 'Malibu Beach',
			location: 'California | USA',
			img: 'malibu',
			to: '/',
		},
		{
			title: 'Airlie beach',
			location: 'Queensland | Australia',
			img: 'airlie',
			to: '/',
		},
		{
			title: 'Cloud Nine',
			location: 'Siargao | Philippines',
			img: 'cloudNine',
			to: '/',
		},
		{
			title: 'Vieux Boucau',
			location: 'Hossegor | France',
			img: 'vieux',
			to: '/',
		},
		{
			title: 'Malibu Beach',
			location: 'California | USA',
			img: 'malibu',
			to: '/',
		},
		{
			title: 'Airlie beach',
			location: 'Queensland | Australia',
			img: 'airlie',
			to: '/',
		},
		{
			title: 'Cloud Nine',
			location: 'Siargao | Philippines',
			img: 'cloudNine',
			to: '/',
		},
		{
			title: 'Vieux Boucau',
			location: 'Hossegor | France',
			img: 'vieux',
			to: '/',
		},
	],
	travelSlider: [
		{
			img: 'travel',
			locationData: {
				subtitle: 'Airline',
				head: {
					state: 'Virgin',
					country: 'Australia',
				},
				left: false,
				img: 'avialogo',
			},
			plane: 'virgin',

		},
		{
			img: 'travel',
			locationData: {
				subtitle: 'Airline1',
				head: {
					state: 'Virgin',
					country: 'Australia',
				},
				left: false,
				img: 'avialogo',
			},
			plane: 'virgin',

		},
		{
			img: 'travel',
			locationData: {
				subtitle: 'Airline2',
				head: {
					state: 'Virgin',
					country: 'Australia',
				},
				left: false,
				img: 'avialogo',
			},
			plane: 'virgin',

		},
		{
			img: 'travel',
			locationData: {
				subtitle: 'Airline3',
				head: {
					state: 'Virgin',
					country: 'Australia',
				},
				left: false,
				img: 'avialogo',
			},
			plane: 'virgin',

		},
	],
	sleepSlider: [
		{
			img: 'sleep',
			locationData: {
				subtitle: 'Rating',
				head: {
					state: 'Excellent',
					country: '',
				},
				left: false,
				img: 'stars',
			},
			plane: 'virgin',

		},
		{
			img: 'sleep',
			locationData: {
				subtitle: 'Rating',
				head: {
					state: 'Excellent',
					country: '',
				},
				left: false,
				img: 'stars',
			},
			plane: 'virgin',

		},
		{
			img: 'sleep',
			locationData: {
				subtitle: 'Rating',
				head: {
					state: 'Excellent',
					country: '',
				},
				left: false,
				img: 'stars',
			},
			plane: 'virgin',

		},
		{
			img: 'sleep',
			locationData: {
				subtitle: 'Rating',
				head: {
					state: 'Excellent',
					country: '',
				},
				left: false,
				img: 'stars',
			},
			plane: 'virgin',

		},
	],
});

export const getters = {
	getSliderData: (state) => state.slidesData,
	getSurfSliderData: (state) => state.surfSlider,
	getTravelSliderData: (state) => state.travelSlider,
	getSleepSliderData: (state) => state.sleepSlider,
};
