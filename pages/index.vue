<template lang="pug">
	.main-wrapper
		<Header/>
		<Banner/>
</template>

<script>
import Banner from '@/components/banner.vue';
import Header from '@/components/header.vue';

export default {
	components: {
		Banner,
		Header,
	},
};
</script>

