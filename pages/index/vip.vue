<template>
	<view class="content">
		<view class="banner_main">
			<view class="tabbar">
				<view class="icon cuIcon-home"></view>
				<view class="title">
					VIP会员
				</view>
				<view class="subscribe">
					订阅
				</view>
				<view class="more cuIcon-sort"></view>
			</view>
			<view class="vipTips">
				<view class="vipTipsMain">
					开通会员最高可省
					<view class="bigFont">
						252
					</view>
					元/月
				</view>
			</view>
		</view>
		<view class="vip_content">
			<view class="title">
				会员尊享权益
			</view>
			<view class="package_big">
				<pkg tips="权益1" title="单单省钱" info="最高省150元"></pkg>
			</view>
			<view class="package_center_main">
				<pkg class="package_center_left" tips="权益2" title="会员神券" info="最高省20元"></pkg>
				<pkg class="package_center_right" tips="权益3" title="券包套餐" info="会员低价买"></pkg>
			</view>
			<scroll-view scroll-x="true" class="package_small_main">
				<view>
					<pkg class="package_small" tips="权益4" title="积分抵扣" info="碳积分抵扣"></pkg>
					<pkg class="package_small" tips="权益5" title="超级福利" info="专属领豪礼"></pkg>
					<pkg class="package_small" tips="权益6" title="生活权益" info="生活特权"></pkg>
					<pkg class="package_small" tips="权益7" title="敬请期待" info="更多权益"></pkg>
				</view>
			</scroll-view>
			<view class="title">
				会员尊享权益
			</view>
			<view class="vip_price_option">
				<view v-for="(item, index) in vip_options" :key="index"
					:class="(index == vip_option_select ? 'active' : '') + ' item_price'"
					@click="vip_option_select=index">
					<view class="mouth">
						{{item.mouth}}个月
					</view>
					<view class="price">
						<view class="small_title">
							¥
						</view>
						{{item.price}}
					</view>
					<view class="calc_price">
						折合¥{{item.price / item.mouth}}/月
					</view>
					<view v-if="item.discounts > 0" class="price_tips">
						券减优惠{{item.discounts}}元
					</view>
				</view>
			</view>
			<view class="active_vip">
				<view class="active_vip_price">
					<view class="small_title">
						¥
					</view>
					{{vip_options[vip_option_select].price}}/
					<view class="small_title">
						{{vip_options[vip_option_select].mouth}}个月
					</view>
				</view>
				<view class="active_vip_btn">
					立即开通
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pkg from '@/component/package.vue'
	export default {
		components: {
			pkg
		},
		data() {
			return {
				vip_options: [{
						mouth: 12,
						price: 198,
						discounts: 0,
					}, {
						mouth: 3,
						price: 48,
						discounts: 0
					},
					{
						mouth: 1,
						price: 15.8,
						discounts: 23.2
					}
				],
				vip_option_select: 0
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #201e1d;

		.banner_main {
			width: 100%;
			height: 340rpx;
			padding: 26rpx 0;

			.tabbar {
				height: 60rpx;
				line-height: 60rpx;
				padding: 0 26rpx;
				margin-bottom: 136rpx;

				view {
					display: inline-block;
				}

				.icon {
					color: #d6c29a;
					font-size: 20px;
					margin-right: 36rpx;
				}

				.title {
					font-weight: bold;
					color: #d6c29a;
					font-size: 16px;
					position: relative;
					top: -4rpx;
					margin-right: 36rpx;
				}

				.subscribe {
					width: 120rpx;
					text-align: center;
					font-size: 12px;
					color: #d6c29a;
					border: 1px solid #d6c29a;
					border-radius: 60rpx;
					height: 50rpx;
					line-height: 50rpx;
					position: relative;
					top: -4rpx;
				}

				.more {
					float: right;
					width: 60rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 50%;
					color: #d6c29a;
					border: 1px solid #d6c29a;
					text-align: center;
					font-size: 16px;
				}
			}

			.vipTips {
				width: 90%;
				margin: 0 auto;
				height: 120rpx;
				background-color: #ffdc9a;
				border-radius: 12px 12px 0 0;
				padding: 8rpx 8rpx 0 8rpx;

				.vipTipsMain {
					width: 100%;
					height: 100%;
					border: 2px solid #f7c66c;
					border-radius: 12px 12px 0 0;
					line-height: 110rpx;
					text-align: center;
					font-size: 16px;
					font-weight: bold;
					color: #6b4303;

					.bigFont {
						font-size: 20px;
						display: inline-block;
						margin: 0 8rpx;
					}
				}
			}
		}

		.vip_content {
			width: 100%;
			height: 100%;
			background-color: #ffffff;
			border-radius: 12px 12px 0 0;
			padding: 32rpx;

			.title {
				font-size: 14px;
				font-weight: bold;
				margin-bottom: 32rpx;
			}

			.package_big {
				width: 100%;
				height: 180rpx;
				margin-bottom: 30rpx;
			}


			.package_center_main {
				margin-bottom: 30rpx;
				overflow: hidden;

				.package_center_left {
					width: 48%;
					height: 180rpx;
					float: left;
				}

				.package_center_right {
					width: 48%;
					height: 180rpx;
					float: right;
				}
			}

			.package_small_main {
				overflow: hidden;
				white-space: nowrap;
				height: 180rpx;
				width: 100%;
				margin-bottom: 30rpx;

				.package_small {
					display: inline-block;
					width: 200rpx;
					margin-right: 16rpx;
				}
			}

			.vip_price_option {
				overflow: hidden;
				margin-bottom: 32rpx;

				.item_price {
					width: 210rpx;
					height: 240rpx;
					float: left;
					border: 1px solid #e5e5e5;
					border-radius: 8px;
					padding: 28rpx 20rpx;
					position: relative;
					overflow: hidden;
					margin-right: 16rpx;

					.mouth {
						font-size: 12px;
						color: #000000;
						font-weight: bold;
						margin-bottom: 12rpx;
					}

					.price {
						font-weight: bold;
						color: #000000;
						font-size: 18px;

						.small_title {
							display: inline-block;
							font-size: 8px;
							font-weight: 400;
							margin-right: 8rpx;
						}
					}

					.calc_price {
						font-size: 6px;
						color: #aa9abc;
					}

					.price_tips {
						position: absolute;
						bottom: 0;
						left: 0;
						height: 40rpx;
						text-align: center;
						width: 100%;
						line-height: 40rpx;
						font-size: 12px;
						color: #ffffff;
						background-color: #ff5f0f;
					}
				}

				.active {
					background-color: #fff4db;
					border-color: #f6be66;
				}
			}
		}

		.active_vip {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #211f1e;
			border-radius: 80rpx;
			overflow: hidden;

			.active_vip_price {
				float: left;
				color: #feefc8;
				padding-left: 40rpx;
				font-size: 20px;
				font-weight: bold;

				view {
					display: inline-block;
				}

				.small_title {
					font-size: 12px;
					font-weight: 400;
				}
			}

			.active_vip_btn {
				float: right;
				width: 180rpx;
				height: 100%;
				background-color: #ff5f0e;
				text-align: center;
				color: #ffffff;
				font-size: 16px;
				font-weight: bold;
			}
		}
	}
</style>