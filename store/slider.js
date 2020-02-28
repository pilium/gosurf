/* eslint-disable no-shadow */
export const state = () => ({
	slidesData: [
		'South Shore',
		'North Shore',
		'West Shore',
		'East Shore',
	],
});

export const getters = {
	getSliderData: (state) => state.slidesData,
};
