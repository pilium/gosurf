<template lang="pug">
	section.section.section--travel(:style="{'background-image': 'url(' + require(`~/assets/travel_glass.png`) + ')' }")
		<Title :data="titleData"/>
		<TravelSlider />
</template>

<script>
import Title from '@/components/section-title';
import TravelSlider from '@/components/travel/travel-slider';

export default {
	name: 'SectionTravel',
	components: {
		Title,
		TravelSlider,
	},
	data() {
		return {
			titleData: {
				title: 'Travel',
				locationData: {
					subtitle: 'Shore',
					head: {
						state: 'Airlie Beach',
						country: 'Australia',
					},
					left: true,
				},
			},
		};
	},
};
</script>
