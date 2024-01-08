<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">电站详情</block>
		</cu-custom>
		<view class="map_content">
			<map :latitude="latitude" :longitude="longitude"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 0,
				longitude: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100vh;

		.map_content {
			width: 100%;
			height: calc(100% - 240rpx);

			map {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>