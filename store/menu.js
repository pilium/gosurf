export const state = () => ({
	menuItems: [
		{
			href: '#',
			name: 'surf',
			title: 'Surf',
			width: '50px',
			height: '40px',
		},
		{
			href: '#',
			name: 'travel',
			title: 'Travel',
			width: '50px',
			height: '32px',
		},
		{
			href: '#',
			name: 'sleep',
			title: 'Sleep',
			width: '40px',
			height: '40px',
		},
		{
			href: '#',
			name: 'shop',
			title: 'Shop',
			width: '40px',
			height: '40px',
		},
	],
});

export const getters = {
	// eslint-disable-next-line no-shadow
	getMenuData: (state) => state.menuItems,
};
