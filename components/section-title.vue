<template lang="pug">
	.section-title
		.section-title__wrapper
			span.back-text.dib {{ data.title }}
			h3.section-title__text.ttu {{ data.title }}
		.section-subtitle.dib.tar
			.subtitle.subtitle--left Current Location
			h4.section-subtitle__head.fw900 California
				span.section-subtitle__separator.fw100 |
				| USA
</template>

<script>
export default {
	name: 'SectionTitle',
	props: {
		data: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>

<style lang="scss">
	.section-title {
		.back-text { transform: translateX(-64px); }

		&__wrapper {
			position: relative;
			max-width: 456px;
		}

		&__text {
			position: absolute;
			right: 32px;
			top: -32px;
			margin: 0;
			font-size: 80px;
			color: var(--color-light);

			&::after {
				content: "";
				position: absolute;
				right: 0;
				top: 0;
				width: 80px;
				height: 1px;
				background-color: var(--color-bg-icon);
			}
		}
	}

	.section-subtitle {
		&__head {
			font-size: 40px;
		}

		&__separator {
			margin: 0 8px;
		}
	}
</style>
