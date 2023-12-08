<template>
	<view class="package">
		<view class="detail">
			<view class="tips">
				{{tips}}
			</view>
			<view class="title">
				{{title}}
			</view>
			<view class="info">
				{{info}}
			</view>
		</view>
		<view class="image">
			<image :src="src" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tips: {
				type: String,
				default: ""
			},
			title: {
				type: String,
				default: ""
			},
			info: {
				type: String,
				default: ""
			},
			src: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.package {
		width: 100%;
		height: 100%;
		background-color: #fff9eb;
		border-radius: 8px;
		overflow: hidden;

		.detail {
			float: left;
			width: 220rpx;
			height: 100%;
			position: relative;
			padding: 50rpx 28rpx 0;

			.tips {
				font-size: 8px;
				color: #d3b246;
				height: 40rpx;
				line-height: 40rpx;
				padding: 0 16rpx;
				position: absolute;
				left: 0;
				top: 0;
				background-color: #ffedcc;
				border-radius: 0 0 8px 0;
			}

			.title {
				font-size: 14px;
				font-weight: bold;
				margin-bottom: 16rpx;
				color: #6b4303;
			}

			.info {
				font-size: 12px;
				color: #a68c60;
			}
		}

		.image {
			float: right;
			height: 100%;
			width: calc(100% - 220rpx);

			image {
				width: 100%;
			}
		}
	}
</style>