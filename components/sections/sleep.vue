<template lang="pug">
	section.section
		<Title :data="titleData"/>
		<SleepSlider />
</template>

<script>
import Title from '@/components/section-title';
import SleepSlider from '@/components/sleep/sleep-slider';

export default {
	name: 'Section',
	components: {
		Title,
		SleepSlider,
	},
	data() {
		return {
			titleData: {
				title: 'Sleep',
				locationData: {
					subtitle: 'Resorts',
					head: {
						state: 'Auberge',
						country: 'Australia',
					},
					left: true,
				},
			},
		};
	},
};
</script>
