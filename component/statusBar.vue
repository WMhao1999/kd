<template>
	<view class="statusBar" :style="{height:(statusBarHeight * 2) + 'rpx'}"></view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: ''
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
</script>

<style lang="scss" scoped>
	.statusBar {
		width: 100%;
	}
</style>