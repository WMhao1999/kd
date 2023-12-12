<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">客服中心</block>
		</cu-custom>
		<view class="main">
			<view class="item_card">
				<view class="title">
					自助服务
				</view>
				<view class="icon_list">
					<view @click="jumpToOrder" class="item_icon">
						<image src="../../static/image/service/qiandan1.svg" mode=""></image>
						<view class="tips">
							订单中心
						</view>
					</view>
					<view @click="jumpToCarAuth" class="item_icon">
						<image src="../../static/image/service/dache.svg" mode=""></image>
						<view class="tips">
							车辆认证
						</view>
					</view>
					<view class="item_icon">
						<image src="../../static/image/service/youhuiquan1.svg" mode=""></image>
						<view class="tips">
							开票服务
						</view>
					</view>
					<view class="item_icon">
						<image src="../../static/image/service/qianbao.svg" mode=""></image>
						<view class="tips">
							账户充值
						</view>
					</view>
				</view>
			</view>
			<view class="item_card">
				<view class="title">
					帮助中心
				</view>
				<scroll-view scroll-x class="bg-white nav">
					<view class="flex text-center">
						<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''"
							v-for="(item,index) in tabData" :key="index" @tap="TabCur=index" :data-id="index">
							{{item.title}}
						</view>
					</view>
				</scroll-view>
				<view class="quest_list">
					<view v-for="(item, index) in tabData[TabCur].data" :key="index" class="quest_item">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="button" style="float: left;">
				<image src="../../static/image/service/a-020_dianhua.svg" mode=""></image>
				电话客服
			</view>
			<view @click="jumpToMessage" class="button active_button" style="float: right;">
				<image src="../../static/image/service/a-020_kefu.svg" mode=""></image>
				在线客服
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				tabData: [{
						title: "常见问题",
						data: [{
								title: "信息上传",
								id: 0
							},
							{
								title: "余额充值未到账",
								id: 0
							},
							{
								title: "余额如何退款",
								id: 0
							},
							{
								title: "计费问题",
								id: 0
							}
						]
					},
					{
						title: "充值/提现/余额",
						data: [{
								title: "余额提现/退款",
								id: 0
							},
							{
								title: "如何充值",
								id: 0
							},
							{
								title: "充值未到账",
								id: 0
							},
							{
								title: "余额被冻结，无法充电，怎么办？",
								id: 0
							}
						]
					},
					{
						title: "订单问题",
						data: [{
								title: '订单状态为 "获取中"',
								id: 0
							},
							{
								title: "充电后，如何查看费用明细",
								id: 0
							},
							{
								title: "为什么收取服务费",
								id: 0
							},
							{
								title: "计费问题",
								id: 0
							}
						]
					}
				]
			}
		},
		methods: {
			jumpToMessage() {
				uni.navigateTo({
					url: "/pages/service/message"
				})
			},
			jumpToOrder() {
				uni.navigateTo({
					url: "/pages/order/order"
				})
			},
			jumpToCarAuth() {
				uni.navigateTo({
					url: "/pages/carAuth/carAuth"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		padding: 20rpx 16rpx;

		.item_card {
			background-color: #ffffff;
			padding: 48rpx 32rpx;
			border-radius: 8px;
			margin-bottom: 20rpx;
			overflow: hidden;

			&>.title {
				font-weight: bold;
				font-size: 16px;
				margin-bottom: 36rpx;
			}

			.icon_list {
				width: 100%;

				.item_icon {
					width: 25%;
					text-align: center;
					display: inline-block;

					image {
						width: 100rpx;
						height: 100rpx;
					}

					.tips {
						font-weight: 400;
					}
				}
			}

			.quest_list {
				margin-top: 40rpx;

				.quest_item {
					padding: 0 16rpx;
					height: 64rpx;
					line-height: 64rpx;
					border-bottom: 1px solid #f6f6f6;
					font-size: 14px;
					color: #4c4c4c;
					margin-bottom: 20rpx;
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200rpx;
		background-color: #ffffff;
		box-shadow: 0 0 20px 6px rgba(0, 0, 0, .2);
		padding: 32rpx 48rpx;

		.button {
			width: 280rpx;
			height: 98rpx;
			line-height: 98rpx;
			border-radius: 98rpx;
			background-color: #e6e9f3;
			font-size: 14px;
			font-weight: bold;
			text-align: center;

			image {
				width: 64rpx;
				height: 64rpx;
				display: inline-block;
				position: relative;
				top: 20rpx;
				margin-right: 12rpx;
			}
		}

		.active_button {
			background-color: #ff5f0f;
			color: #ffffff;
		}
	}
</style>