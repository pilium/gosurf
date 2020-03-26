<template lang="pug">
	.surf-slider
		div(v-swiper:mySwiper1="swiperOption1")
			.surf-slider__map(:style="{'background-image': 'url(' + require('~/assets/surf_map.png') + ')' }")
				.surf-slider__pagination.f(slot="pagination")
			.swiper-wrapper
				.swiper-slide.surf-slide(v-for="slide, index in surfData" :key="index")
					.surf-slide__inner(:style="{'background-image': 'url(' + require(`~/assets/${slide.img}.jpg`) + ')' }")
						.surf-slide__info
							.surf-slide__title.fw900.pb1.mb1 {{ slide.title }}
							.surf-slide__location {{ slide.location }}
						.surf-slide__btn.tac.ttu
							<Btn :data="btnData"/>
			.slider__navigation.fc
				button.surf__prev.mr1(slot="button-prev" type="button")
					<svg-icon class="slide__arrow" name="arrow-left" title="Стрелка налево" width="24px" height="20px"/>
				button.surf__next(slot="button-next" type="button")
					<svg-icon class="slide__arrow" name="arrow-right" title="Стрелка направо" width="24px" height="20px"/>
</template>

<script>
import Btn from '@/components/btn';

export default {
	name: 'SurfSlider',
	components: {
		Btn,
	},
	data() {
		return {
			swiperOption1: {
				loop: true,
				slidesPerView: 4,
				navigation: {
					nextEl: '.surf__next',
					prevEl: '.surf__prev',
				},
				pagination: {
					el: '.surf-slider__pagination',
					clickable: true,
					bulletClass: 'surf-slider__dots',
					bulletActiveClass: 'surf-slider__dots--active',
					clickableClass: 'surf-slider__dots--clicked',
					renderBullet(index, className) {
						const paginationData = [
							{
								title: 'Malibu Beach',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Airlie Beach',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Cloud Nine',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Vieux Boucau',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Cloud Nine',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Vieux Boucau',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Malibu Beach',
								subtitle: 'Australia',
								condition: {
									surf: '2-3',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
							{
								title: 'Airlie Beach',
								subtitle: 'Australia',
								condition: {
									surf: '9-13',
									tide: '+ 2.3',
									wind: '4 SE',
								},
							},
						];

						return `
							<div class="${className} ${className}--${index + 1}">
								<div class="surf-slider__dots-circle"></div>
								<div class="surf-slider__dots-content">
									<div class="surf-slider__dots-row fl mb2">
										<div class="surf-slider__dots-head f fcl">
											<span class="surf-slider__dots-title fw900 mb2"> ${paginationData[index].title} </span>
											<span class="surf-slider__dots-subtitle"> ${paginationData[index].subtitle} </span>
										</div>
										<a class="surf-slider__dots-link" href="/">
											<svg width="24px" height="20px" xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons"><title>Перейти</title><use href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-arrow-right" xlink:href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-arrow-right"></use></svg>
										</a>
									</div>
									<div class="surf-slider__dots-row fl">
										<div class="surf-slider__dots-condition tac fcl fl">
											<svg width="32px" height="24px" xmlns="http://www.w3.org/2000/svg" class="mb1 icon sprite-icons"><title>Перейти</title><use href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-surf-icon" xlink:href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-surf-icon"></use></svg>
											<span class="surf-slider__dots-value fw900 mb1">${paginationData[index].condition.surf}</span>
											<span class="surf-slider__dots-name fw300">Surf (FT)</span>
										</div>
										<div class="surf-slider__dots-condition tac fcl fl">
											<svg width="32px" height="24px" xmlns="http://www.w3.org/2000/svg" class="mb1 icon sprite-icons"><title>Перейти</title><use href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-water" xlink:href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-water"></use></svg>
											<span class="surf-slider__dots-value fw900 mb1">${paginationData[index].condition.tide}</span>
											<span class="surf-slider__dots-name fw300">Tide (FT)</span>
										</div>
										<div class="surf-slider__dots-condition tac fcl fl">
											<svg width="32px" height="24px" xmlns="http://www.w3.org/2000/svg" class="mb1 icon sprite-icons"><title>Перейти</title><use href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-wind" xlink:href="/_nuxt/70b7647367cc05e54eb09656683a8137.svg#i-wind"></use></svg>
											<span class="surf-slider__dots-value fw900 mb1">${paginationData[index].condition.wind}</span>
											<span class="surf-slider__dots-name fw300">Wind (FT)</span>
										</div>
									</div>
								</div>
							</div>
						`;
					},
				},
			},
			btnData: {
				first: 'view',
				last: 'serf',
			},
		};
	},
	computed: {
		surfData() {
			return this.$store.getters['slider/getSurfSliderData'];
		},
	},
};
</script>

<style lang="scss">
.surf-slider {
	position: relative;

	&__pagination {
		min-height: 632px;
		max-width: 1200px;
	}

	&__map {
		position: relative;
		margin: 0 auto 40px;
		min-height: 632px;
		max-width: 1200px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	&__dots {
		position: absolute;

		&-circle {
			border-radius: 50%;
			width: 24px;
			height: 24px;
			background-color: var(--color-icon);
			cursor: pointer;
		}

		&-content {
			position: absolute;
			bottom: 32px;
			z-index: 11;
			display: none;
			border-radius: 16px;
			padding: 24px;
			width: 285px;
			background-color: var(--color-bg-body);
		}

		&-value { line-height: 23px; }
		&-subtitle { text-transform: capitalize; }

		&-name {
			font-size: 10px;
			line-height: 12px;
		}

		&-title {
			position: relative;
			font-size: 18px;
			line-height: 26px;

			&::before {
				content: "";
				position: absolute;
				left: 0;
				bottom: 0;
				width: 80px;
				height: 1px;
				background-color: var(--color-icon);
			}
		}

		&--1 { top: 335px; }

		&--2 {
			left: 11%;
			top: 270px;
		}

		&--3 {
			left: 28%;
			top: 320px;
		}

		&--4 {
			left: 34%;
			top: 500px;
		}

		&--5 {
			left: 44%;
			top: 223px;
		}

		&--6 {
			left: 51%;
			top: 567px;
		}

		&--7 {
			left: 82%;
			top: 375px;
		}

		&--8 {
			left: 90%;
			top: 500px;
		}

		&--active {
			.surf-slider__dots-content {
				display: block;
				transform: translateX(-50%);
			}

			.surf-slider__dots-circle {
				border: 3px solid var(--color-icon);
				border-radius: 0 50% 50% 50%;
				box-shadow: 0 0 32px rgba(74, 246, 205, 0.837777);
				transform: rotate(45deg);
			}
		}
	}

	.slider__navigation { top: 45%; }

	.swiper-container {
		position: static;
		min-height: 632px;
	}
}

.surf-slide {
	&__inner {
		position: relative;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	&__info {
		position: relative;
		min-height: 752px;
		background-color: rgba(#1c2121, 0.85);

		&:hover,
		&:focus {
			background-color: rgba(#1c2121, 0.3);
			cursor: pointer;

			+ .surf-slide__btn { display: block; }
		}
	}

	&__title {
		padding: 72px 0 0 40px;
		width: 140px;
		font-size: 40px;
		line-height: 36px;
	}

	&__location {
		position: absolute;
		left: 40px;
		bottom: 80px;
		width: 0;
		height: 0;
		font-size: 18px;
		line-height: 22px;
		letter-spacing: 8px;
		white-space: nowrap;
		transform: rotate(-90deg);
	}

	&__btn {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: none;
	}

	&:nth-child(4n + 1) {
		.surf-slide__inner { margin-top: 32px; }
	}

	&:nth-child(4n + 3) {
		.surf-slide__inner { margin-top: 88px; }
	}

	&.swiper-slide-active {
		.surf-slide__btn { display: block; }
		.surf-slide__info { background-color: rgba(#1c2121, 0.3); }
	}
}
</style>

