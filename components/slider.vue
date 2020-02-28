<template lang="pug">
	div(v-swiper:mySwiper="swiperOption")
		.swiper-wrapper.slider
			p.slider__back-text.fw900.ttu Go Surf
			<BackImg/>
			.swiper-slide.slide(v-for="slide, index in slideData" :style="{'background-image': 'url(' + require('~/assets/header_bg.jpg') + ')' }")
				.slide__info.tar.ttu
					.subtitle.subtitle--left.mb1 Surf
					.slide__title.mb6.fw900 {{ slideData[index] }}
					.subtitle.subtitle--left.mb1 Condition
					.slide__text.mb2.fw900 Radical
					nuxt-link.slide__link(to="/")
						<svg-icon class="slide__arrow" name="arrow-right" title="Стрелка направо" width="24px" height="20px"/>
		.slider__pagination.fl(slot="pagination")
		.slider__navigation.fc
			button.slider__prev.mr1(slot="button-prev" type="button")
				<svg-icon class="slide__arrow" name="arrow-left" title="Стрелка направо" width="24px" height="20px"/>
			button.slider__next(slot="button-next" type="button")
				<svg-icon class="slide__arrow" name="arrow-right" title="Стрелка направо" width="24px" height="20px"/>
</template>

<script>
import BackImg from '@/components/back-img';

export default {
	name: 'Slider',
	components: {
		BackImg,
	},
	data() {
		return {
			swiperOption: {
				loop: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				effect: 'fade',
				navigation: {
					nextEl: '.slider__next',
					prevEl: '.slider__prev',
				},
				pagination: {
					el: '.slider__pagination',
					clickable: true,
					renderBullet(index, className) {
						return `
							<div class="slider__dot dib ${className}">
								<div class="slider__dot-box fl">
									<div class="slider__dot-number fw900">0${index + 1}</div>
									<div class="slider__dot-name fw300"></div>
								</div>
							</div>
						`;
					},
				},
			},
		};
	},
	computed: {
		slideData() {
			return this.$store.getters['slider/getSliderData'];
		},
	},
	mounted() {
		const sliderDots = document.querySelectorAll('.slider__dot-name');

		for (let i = 0; i < sliderDots.length; i++) {
			const element = sliderDots[i];

			element.innerHTML = this.slideData[i];
		}
	},
};
</script>

<style lang="scss">
	.swiper-container {
		width: 100%;
		height: 100vh;

		.swiper-pagination-bullets {
			position: absolute;
			left: auto;
			right: 80px;
			bottom: 40px;
			z-index: 10;
			width: 100%;
			max-width: 920px;
			color: #fff;
		}

		.swiper-pagination-bullet {
			display: block;
			width: auto;
			height: auto;
			background: none;

			&-active {
				background: none;
				.slider__dot-box { border-top: 4px solid var(--color-border); }
			}
		}
	}

	.slider {
		&__navigation {
			position: absolute;
			right: 80px;
			top: 40px;
			z-index: 10;
		}

		&__dot-number {
			font-size: 24px;
			line-height: 34px;
		}

		&__dot-name { line-height: 19px; }

		&__dot-box {
			border-top: 4px solid var(--color-border-light);
			padding-top: 8px;
			width: 200px;
			height: 28px;
		}

		&__back-text {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 5;
			max-width: 464px;
			font-size: 200px;
			line-height: 156px;
			color: var(--color-light);
			opacity: 0.07;
		}
	}

	.slide {
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: var(--color-text--bg);

		&__info {
			position: absolute;
			right: 80px;
			bottom: 116px;
			color: var(--color-light);
		}

		&__title {
			font-size: 80px;
			line-height: 86px;
		}

		&__text { font-size: 40px; }

		&__arrow {
			width: 24px;
			height: 20px;
		}
	}
</style>
