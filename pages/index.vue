<template lang="pug">
	.main-wrapper
		<Header/>
		<Banner/>
		.container
			<Surf/>
			<Travel/>
			<Sleep/>
			<Shop/>
</template>

<script>
import Banner from '@/components/header/banner.vue';
import Header from '@/components/header/header.vue';
import Surf from '@/components/sections/surf.vue';
import Travel from '@/components/sections/travel.vue';
import Sleep from '@/components/sections/sleep.vue';
import Shop from '@/components/sections/shop.vue';

export default {
	components: {
		Banner,
		Header,
		Surf,
		Travel,
		Sleep,
		Shop,
	},
};
</script>

