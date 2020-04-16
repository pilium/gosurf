<template lang="pug">
	section.section
		<Title :data="titleData"/>
</template>

<script>
import Title from '@/components/section-title';

export default {
	name: 'Section',
	components: {
		Title,
	},
	data() {
		return {
			titleData: {
				title: 'Sleep',
				locationData: {
					subtitle: 'Current location',
					head: {
						state: 'California',
						country: 'USA',
					},
					left: true,
				},
			},
		};
	},
};
</script>
