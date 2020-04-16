<template lang="pug">
	.place__info.f.mb6.ttu
		.place__info-item
			.place__info-subtitle.tar {{info.title.first}}
			.place__info-title.fw900 {{info.city}} <br/> {{info.country}}
		.place__info-item
			.place__info-subtitle.tar {{info.title.second}}
			.place__info-title.fw900 {{info.distance}}
		.place__info-item
			.place__info-subtitle.tar {{info.title.third}}
			.place__info-title.fw900 {{info.time.hours}} <br/> {{info.time.minutes}}
		.place__info-item
			.place__info-subtitle.tar {{info.title.fourth}}
			.place__info-title.fw900 {{info.price}}
				span.fw300 Round Trip
</template>

<script>
export default {
	name: 'Place',
	props: {
		info: {
			'type': Object,
			'default': {},
		},
	},
};
</script>

<style lang="scss" scoped>
.place {
	&__info { justify-content: space-around; }

	&__info-item {
		position: relative;
		margin-bottom: 64px;
	}

	&__info-subtitle {
		position: absolute;
		left: -96px;
		top: 96px;
		width: 200px;
		height: 0;
		font-size: 18px;
		line-height: 22px;
		white-space: nowrap;
		opacity: 0.5;
		transform: rotate(-90deg);
	}

	&__info-title {
		position: relative;
		padding-left: 40px;
		font-size: 40px;
		line-height: 36px;
		white-space: nowrap;

		span {
			position: absolute;
			right: 0;
			bottom: -32px;
			font-size: 14px;
			letter-spacing: 5.25px;
			opacity: 0.75;
		}
	}
}
</style>
