<template lang="pug">
	header.header.tac
		.header__logo
			<svg-icon class="header__logo-icon" name="logo" title="логотип" width="168px" height="290px"/>
		.header__nav
			<Nav/>
		.header__search.mb2
			<Search/>
		.header__date.mb4
			span.header__date-day.db.fw900 20
			span.header__date-year.fw300.tac 06 | 2019
		.header__location.flc.fw300
			<svg-icon class="location__icon mr1" name="geoMarker" title="Иконка местоположения" width="11px" height="14px"/>
			span California
		.header__arrows.animated.slideInTop
			a(herf="#")
				<svg-icon class="location__icon" name="downArrows" title="Иконка местоположения" width="21px" height="24px"/>
</template>

<script>
import Nav from '@/components/header/navigation';
import Search from '@/components/header/search';

export default {
	name: 'Header',
	components: {
		Nav,
		Search,
	},
};
</script>

<style lang="scss" scoped>
	.header {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		border-right: 1px solid var(--color-border-light);
		height: 100vh;

		&__logo { margin-bottom: 112px; }

		&__date-day {
			font-size: 72px;
			line-height: 64px;
		}

		&__date-year {
			line-height: 19px;
			letter-spacing: 1.4px;
		}

		&__location {
			font-size: 12px;
			line-height: 14px;
			letter-spacing: 1.05px;
		}

		&__arrows {
			position: absolute;
			left: 210px;
			bottom: 30px;
			z-index: 3;
		}
	}
</style>
