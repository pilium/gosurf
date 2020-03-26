<template lang="pug">
	section.section(:style="{'background-image': 'url(' + require('~/assets/surf_poi.png') + ')'}")
		<Title :data="titleData"/>
		<SurfSlider />
</template>

<script>
import Title from '@/components/section-title';
import SurfSlider from '@/components/surf/surf-slider';

export default {
	name: 'Section',
	components: {
		Title,
		SurfSlider,
	},
	data() {
		return {
			titleData: {
				title: 'Surf',
			},
		};
	},
};
</script>
