<template lang="pug">
	nuxt-link.btn.fw900(to="/")
		span {{ data.first }}
		span {{ data.last }}
			<svg-icon class="btn__icon" name="arrow-right" title="Перейти" width="25px" height="21px"/>
</template>

<script>
export default {
	props: {
		data: {
			'type': Object,
			'default': {},
		},
	},
};
</script>

<style lang="scss">
	.btn {
		font-size: 40px;
		line-height: 36px;
		color: var(--color-light);

		span:first-child {
			margin-right: 24px;
		}

		span:last-child {
			position: relative;
			display: inline-block;
			padding: 16px 56px 16px 24px;
			background-color: var(--color-border);

			&::before {
				content: "";
				position: absolute;
				left: -16px;
				top: 50%;
				width: 32px;
				height: 2px;
				background-color: var(--color-light);
			}

			.btn__icon {
				position: absolute;
				right: 16px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>

