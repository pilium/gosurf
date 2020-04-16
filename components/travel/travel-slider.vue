<template lang="pug">
	.travel-slider
		div(v-swiper:mySwiper2="swiperOption2")
			.swiper-wrapper
				.swiper-slide.travel-slide(v-for="slide, index in travelData" :key="index")
					.travel-slide__descr(:style="{'background-image': 'url(' + require(`~/assets/${slide.img}.png`) + ')' }")
					.travel-slide__descr-head(:style="{'background-image': 'url(' + require(`~/assets/${slide.plane}.png`) + ')' }")
						<Location :options="slide.locationData"/>
					<PlaceInfo :info="place"/>
					.travel-slide__btn.tac.ttu
						<Btn :data="btnData"/>
			.slider__navigation.fc
				button.surf__prev.mr1(slot="button-prev" type="button")
					<svg-icon class="slide__arrow" name="arrow-left" title="Стрелка налево" width="24px" height="20px"/>
				button.surf__next(slot="button-next" type="button")
					<svg-icon class="slide__arrow" name="arrow-right" title="Стрелка направо" width="24px" height="20px"/>
</template>

<script>
import Btn from '@/components/btn';
import Location from '@/components/currentLocation';
import PlaceInfo from '@/components/place';

export default {
	name: 'TravelSlider',
	components: {
		Btn,
		Location,
		PlaceInfo,
	},
	data() {
		return {
			swiperOption2: {
				loop: true,
				slidesPerView: 1,
				navigation: {
					nextEl: '.surf__next',
					prevEl: '.surf__prev',
				},
			},
			btnData: {
				first: 'book',
				last: 'flight',
			},
			place: {
				title: {
					first: 'Destination',
					second: 'Distance',
					thirs: 'Travel Time',
					fourth: 'Pricing',
				},
				city: 'Queensland',
				country: 'Australia',
				distance: '7,065 Miles',
				time: {
					hours: '23 Hours',
					minutes: '5 Minutes',
				},
				price: '$1,976 USD',

			},
		};
	},
	computed: {
		travelData() {
			return this.$store.getters['slider/getTravelSliderData'];
		},
	},
};
</script>

<style lang="scss" scoped>
.travel-slider {
	.location { text-align: left; }
}

.travel-slide {
	&__descr {
		min-height: 784px;
		background-position: top left;
		background-repeat: no-repeat;
	}

	&__descr-head {
		margin-top: -232px;
		margin-bottom: 104px;
		padding-top: 160px;
		padding-left: 136px;
		min-height: 320px;
		background-position: right center;
		background-repeat: no-repeat;
	}
}
</style>
