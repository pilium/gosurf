<template lang="pug">
	.location.dib.tar
		.subtitle(:class="{ 'subtitle--left': options.left }") {{ options.subtitle }}
		h4.location__head.fw900 {{ options.head.state }}
			span.location__separator.fw100 |
			span {{ options.head.country }}
</template>

<script>
export default {
	name: 'CurrentLocation',
	props: {
		options: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>

<style lang="scss">
.location {
	&__head {
		margin: 8px 0;
		font-size: 40px;
	}
	&__separator { margin: 0 8px; }
}
</style>
