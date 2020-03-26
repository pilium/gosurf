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
});

export const getters = {
	getSliderData: (state) => state.slidesData,
	getSurfSliderData: (state) => state.surfSlider,
};
