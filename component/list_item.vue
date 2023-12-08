<template>
	<view class="listItem shadow-warp">
		<view class="info">
			<view class="left_info">
				<view class="title">
					{{config.title}}
				</view>
				<view class="small_tips">
					{{config.round_date}}小时
				</view>
				<view class="price_main">
					<view class="price">
						<view class="number">
							{{config.price}}
						</view>
						<view class="unit">
							元/度
						</view>
						<view v-if="config.special_offer" class="tab">
							天天特价
						</view>
					</view>
					<view class="vip_main">
						<view class="vip_title">
							VIP
						</view>
						<view class="vip_price">
							<view class="number">
								{{config.vip_price}}
							</view>
							<view class="unit">
								元/度起
							</view>
						</view>
					</view>
				</view>
				<view class="infoTips">
					<view v-for="(item,index) in config.tips" :key="index" class="item">
						{{item}}
					</view>
				</view>
			</view>
			<view class="right_info">
				<view class="distance">
					<view class="icon cuIcon-locationfill"></view>
					{{config.distance}}km
				</view>
				<view class="count_mian">
					<view class="count_tips">
						快
					</view>
					<view class="count">
						闲 {{config.used}}/{{config.car_count}}
					</view>
				</view>
			</view>
		</view>
		<view class="tips">
			<view class="title">
				P
			</view>
			{{config.p_tips}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			config: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {}
	}
</script>

<style scoped lang="scss">
	.listItem {
		background-color: #ffffff;
		border-radius: 10px;
		width: 100%;
		height: 100%;
		padding: 18rpx 24rpx;

		.info {
			width: 100%;
			height: calc(100% - 40rpx);

			.left_info {
				float: left;
				width: calc(100% - 180rpx);
				height: 100%;

				.title {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 16px;
					font-weight: bold;
					margin-bottom: 12rpx;
				}

				.small_tips {
					font-size: 12px;
					color: #90406b;
					margin-bottom: 12rpx;
				}

				.price_main {
					margin-bottom: 12rpx;

					view {
						display: inline-block;
					}

					.price {
						margin-right: 16rpx;

						.number {
							font-size: 16px;
							font-weight: bold;
							color: #ff5f0f;
							margin-right: 8rpx;
						}

						.unit {
							font-size: 10px;
							color: #ff5f0f;
							margin-right: 8rpx;
						}

						.tab {
							padding: 0 6rpx;
							font-size: 12px;
							background-color: #ff5f0f;
							color: #ffffff;
							border-radius: 3px;
						}
					}
				}

				.vip_main {
					background-color: #ffeaba;
					border-radius: 4px;
					overflow: hidden;
					position: relative;
					top: 6rpx;

					.vip_title {
						height: 100%;
						background-color: #3b3f48;
						color: #fedf9b;
						padding: 0 6rpx;
						margin-right: 6rpx;
					}

					.number {
						font-size: 12px;
						font-weight: bold;
						color: #000000;
						margin-right: 8rpx;
					}

					.unit {
						font-size: 10px;
						color: #000000;
						margin-right: 8rpx;
					}
				}

				.infoTips {
					width: 100%;
					overflow: hidden;
					background-color: #ffffff;

					.item {
						padding: 0rpx 8rpx;
						color: #000000;
						border: 1px solid #ffa061;
						font-size: 12px;
						display: inline-block;
						border-radius: 3px;
						margin-right: 8rpx;
					}
				}
			}

			.right_info {
				width: 180rpx;
				float: right;
				height: 100%;

				.distance {
					height: 56rpx;
					line-height: 56rpx;
					text-align: center;
					width: 100%;
					margin: 0 auto;
					border-radius: 56rpx;
					border: 1px solid #cccccc;
					position: relative;
					padding: 0 8rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
					margin-bottom: 20rpx;

					.icon {
						position: absolute;
						left: 6rpx;
					}
				}

				.count_mian {
					view {
						display: inline-block;
					}

					.count_tips {
						background-color: #fff2e6;
						color: #ff5f0f;
						font-weight: bold;
						font-size: 12px;
						padding: 4rpx;
						border-radius: 4px;
						margin-right: 8rpx;
					}

					.count {
						font-size: 12px;
					}
				}
			}
		}

		.tips {
			height: 40rpx;
			background-color: #f6f6f6;
			border-radius: 4px;
			overflow: hidden;
			font-size: 12px;
			line-height: 40rpx;

			.title {
				width: 40rpx;
				text-align: center;
				line-height: 40rpx;
				height: 40rpx;
				font-size: 12px;
				font-weight: bold;
				background-color: #dff1ff;
				color: #4f9eff;
				margin-right: 12rpx;
				float: left;
			}
		}
	}
</style>