<template lang="pug">
	nav.menu
		ul.menu__list(v-for="item, key in menuItems" key="index")
			li.menu__item.mb3
				a.menu__link.db.tac(:href="item.href")
					<svg-icon class="menu__item-icon" :name="item.name" :title="item.title" :width="item.width" :height="item.height"/>
					span.db.fw500 {{ item.title }}
</template>

<script>
export default {
	computed: {
		menuItems() {
			return this.$store.getters['menu/getMenuData'];
		},
	},
};
</script>

<style lang="scss" scoped>
	.menu {
		&__link {
			color: var(--color-light);
		}

		span {
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 3px;
		}
	}
</style>
