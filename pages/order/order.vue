<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">订单中心</block>
		</cu-custom>
		<view class="main">
			<view class="title">
				全部订单
			</view>
			<view class="card">
				<view class="title">
					以累计为您节省
				</view>
				<view class="price">
					<view class="price_icon">
						¥
					</view>
					0.00
				</view>
				<view class="count">
					<view class="item">
						累计花费: ¥0.00
					</view>
					<view class="item">
						累计充电: 0.00度
					</view>
				</view>
			</view>
			<view class="tabbar">
				<scroll-view scroll-x class="bg-white nav">
					<view class="flex text-center">
						<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''"
							v-for="(item,index) in tabData" :key="index" @tap="TabCur=index" :data-id="index">
							{{item}}
						</view>
					</view>
				</scroll-view>
				<view class="tab_main">
					<view v-if="filter.length === 0" class="no_data">
						<image src="../../static/image/service/qiandan1.svg" mode=""></image>
						暂无订单
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabData: ["全部", "进行中", "待支付", "已完成"],
				TabCur: 0,
				data: [],
				filter: []
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		padding: 24rpx 36rpx;

		&>.title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 20rpx;
		}

		.card {
			min-height: 160rpx;
			background-color: #ff850e;
			border-radius: 12px;
			color: #ffffff;
			padding: 24rpx;
			margin-bottom: 20rpx;

			.title {
				font-size: 12px;
				margin-bottom: 18rpx;
			}

			.price {
				font-size: 26px;
				font-weight: bold;
				margin-bottom: 18rpx;


				.price_icon {
					display: inline-block;
					font-size: 10px;
					font-weight: 400;
					margin-right: 16rpx;
				}
			}

			.count {
				overflow: hidden;
				font-size: 12px;

				.item {
					float: left;
					font-size: 12px;
					margin-right: 28rpx;
				}
			}
		}

		.tabbar {
			background-color: #ffffff;
			border-radius: 16px;
			overflow: hidden;

			.tab_main {
				padding: 48rpx 36rpx;

				.no_data {
					text-align: center;
					font-size: 16px;

					image {
						width: 160rpx;
						height: 160rpx;
						display: block;
						margin: 0 auto 18rpx;
					}
				}
			}
		}


	}
</style>