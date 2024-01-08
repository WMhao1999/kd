<template>
	<view class="container">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">电站详情</block>
		</cu-custom>
		<view class="main">
			<view class="title_option">
				<view class="icon_main">
					<view class="icon cuIcon-write"></view>
					<view class="icon cuIcon-favor"></view>
					<view class="icon cuIcon-upload"></view>
				</view>
			</view>
			<view class="cu-card dynamic title_info">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar xl"
								style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
							</view>
							<view class="content flex-sub">
								<view class="cu_avatar_title">派结充电站004-1</view>
								<view class="text-gray text-sm flex">
									<view class="content_tips" style="color: #ff5f0f;">
										限时免费停车
										<view class="icon cuIcon-question"></view>
									</view>
									<view class="content_tips">
										开票
										<view class="icon cuIcon-question"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="status">
				<view class="item">
					运营中
				</view>
				<view class="item">
					24小时
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<view class='cu-tag radius'>普通尺寸</view>
					<view class='cu-tag radius'>普通尺寸</view>
					<view class='cu-tag radius'>普通尺寸</view>
				</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view @click="goMap" class="title">
					<view>据您2.43km，北京市海淀区彩和坊路10号</view>
				</view>
				<view class="icon cuIcon-location"></view>
			</view>
			<view class="tips">
				<view class="icon cuIcon-subscription"></view>
				4分钟前有人充电
			</view>
		</view>
		<view class="white_card">
			<view class="tips_main">
				<view class="left">
					快充
				</view>
				<view class="right">
					<view class="car_count">
						空闲 1/6
					</view>
					<view class="power">
						最大功率：120KW
					</view>
				</view>
			</view>
		</view>
		<view class="white_card">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''"
						v-for="(item,index) in navs" :key="index" @tap="TabCur=index" :data-id="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view class="tab_content">
				<view v-if="TabCur==0" class="tab_item radius shadow-warp bg-white">
					<view class="cu-form-group">
						<view class="title">
							充电价格
						</view>
						<view class="icon">
							价格详情
							<view class="cuIcon-right" style="display: inline-block;"></view>
						</view>
					</view>
					<view class="price_main">
						<view class="left">
							<view class="title">
								快电价
							</view>
							<view class="price">
								1.14
								<view class="unit">
									元/度
								</view>
							</view>
						</view>
						<view class="right">
							<view class="title">
								会员价
							</view>
							<view class="price">
								1.09
								<view class="unit">
									元/度
								</view>
							</view>
						</view>
					</view>
					<view class="holder">
						价格说明：VIP价格优惠有幅度限制，VIP价格服务优惠0.05元/度
					</view>
					<view class="cu-form-group">
						<view class="title">
							停车费
						</view>
						<view class="icon">
							充电减免俩个小时停车费
							<view class="cuIcon-right" style="display: inline-block;"></view>
						</view>
					</view>
				</view>
				<view v-if="TabCur==1" class="tab_item radius shadow-warp bg-white"></view>
				<view v-if="TabCur==2" class="tab_item radius shadow-warp bg-white"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs: ["费用", "电桩", "周边"],
				TabCur: 0
			}
		},
		methods: {
			goMap() {
				uni.navigateTo({
					url: "/pages/detail/mapView"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.cu-list.menu-avatar>.cu-item .content {
		left: 180rpx;
	}

	.container {
		width: 100%;
		height: 100vh;

		.white_card {
			padding: 48rpx 36rpx;
			background-color: #ffffff;
			border-radius: 18px;
			margin-bottom: 40rpx;
		}

		.main {
			background-color: #ffffff;
			border-radius: 0 0 18px 18px;
			overflow: hidden;
			padding-bottom: 36rpx;
			margin-bottom: 40rpx;

			.title_option {
				overflow: hidden;
				padding: 0 36rpx;
				background-color: #ffffff;

				.icon_main {
					float: right;

					.icon {
						display: inline-block;
						width: 60rpx;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 20px;
						margin-left: 12rpx;
						color: #363636;
					}
				}
			}

			.title_info {
				margin-bottom: 12rpx;

				&>.cu-item {
					margin: 0;
				}

				.content_tips {
					margin-right: 20rpx;

					.icon {
						display: inline-block;
						margin-left: 8rpx;
					}
				}

				.cu_avatar_title {
					font-size: 18px !important;
					font-weight: bold;
					margin-bottom: 20rpx;
				}
			}

			.tips {
				padding: 0 32rpx;
				font-size: 12px;

				.icon {
					color: #ff5f0f;
					display: inline-block;
					margin-right: 8rpx;
				}
			}

			.status {
				padding: 0 20rpx;

				view {
					display: inline-block;
					margin-right: 16rpx;
					font-size: 12px;
					color: #262626;
				}
			}
		}

		.tips_main {
			height: 68rpx;
			border: 1px solid #ff5f0f;
			border-radius: 8px;
			overflow: hidden;

			.left {
				float: left;
				width: 120rpx;
				height: 100%;
				background-color: #ff5f0f;
				font-size: 16px;
				text-align: center;
				line-height: 68rpx;
				color: #ffffff;
			}

			.right {
				float: right;
				width: calc(100% - 120rpx);
				padding: 0 32rpx;

				.car_count {
					float: left;
					font-weight: bold;
					line-height: 64rpx;
				}

				.power {
					float: right;
					line-height: 64rpx;
					font-size: 12px;
				}
			}
		}

		.tab_content {
			margin-top: 40rpx;

			.holder {
				padding: 0 18rpx;
				font-size: 12px;
				margin: 12rpx 0;
			}

			.price_main {
				overflow: hidden;
				padding: 0 18rpx;

				&>view {
					padding: 24rpx 12rpx;
					min-height: 90rpx;
					color: #ff5f0f;

					.title {
						margin-bottom: 12rpx;
					}

					.price {
						font-size: 24px;
						font-weight: bold;

						.unit {
							font-size: 12px;
							display: inline-block;
							font-weight: 400;
							margin-left: 6rpx;
							color: #bc9a8c;
						}
					}
				}

				.left {
					width: 47%;
					float: left;
					background-color: #fff8f2;
					border-radius: 8px 0 0 8px;
				}

				.right {
					width: 47%;
					float: right;
					background-color: #fff9ec;
					border-radius: 0 8px 8px 0;
				}
			}
		}
	}
</style>