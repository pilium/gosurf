<template lang="pug">
	<div v-swiper:mySwiper="swiperOption">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners">
				<span> {{ banner }} </span>
			</div>
		</div>
		<div class="swiper-pagination swiper-pagination-bullets"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banners: [
				'1',
				'2',
				'3',
			],
			swiperOption: {
				loop: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 30,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					clickable: true,
				},
			},
		};
	},
};
</script>

<style lang="scss" scoped>
	.swiper-container {
		width: 100%;
		height: 100vh;
	}

	.swiper-pagination-bullet { background-color: hsl(0, 100%, 50%); }

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 38px;
		text-align: center;
		background-color: #eee;
	}
</style>
