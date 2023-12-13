<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">开具发票</block>
		</cu-custom>
		<view class="main">
			<view class="parent_tab">
				<scroll-view scroll-x class="bg-white nav">
					<view class="flex text-center">
						<view class="cu-item flex-sub" :class="index==parentTabId?'text-orange cur':''"
							v-for="(item,index) in parentTab" :key="index" @tap="parentTabId=index" :data-id="index">
							{{item}}
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="invoice_1" v-if="parentTabId==0">
				<scroll-view scroll-x class="bg-white nav text-center">
					<view class="cu-item" :class="index==tabId1?'text-blue cur':''" v-for="(item,index) in tab1"
						:key="index" @tap="tabId1=index" :data-id="index">
						{{item}}
					</view>
				</scroll-view>
				<view class="invoice_main_1">
					<view class="no_data">
						<image src="../../static/image/service/qiandan1.svg" mode=""></image>
						暂无可用数据
					</view>
				</view>
				<view class="footer">
					<view class="order_count">
						0个订单，共0元
					</view>
					<view class="methods">
						<view class="radio">
							<radio :class="radioCheck?'checked':''" :checked="radioCheck"></radio>
							<view class="text">
								全部选中
							</view>
						</view>
						<view class="button">
							下一步
						</view>
					</view>
				</view>
			</view>
			<view class="invoice_2" v-if="parentTabId==1">
				<scroll-view scroll-x class="bg-white nav text-center">
					<view class="cu-item" :class="index==tabId2?'text-blue cur':''" v-for="(item,index) in tab2"
						:key="index" @tap="tabId2=index" :data-id="index">
						{{item}}
					</view>
				</scroll-view>
				<view class="invoice_main_2">
					<view class="no_data">
						<image src="../../static/image/service/qiandan1.svg" mode=""></image>
						暂无可用数据
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
				parentTabId: 0,
				parentTab: ["可开发票订单", "已开发票订单"],
				tabId1: 0,
				tab1: ["充电订单", "超时占位费订单"],
				tabId2: 0,
				tab2: ["充电订单", "超时占位费订单"],
				radioCheck: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100vh;
	}

	.parent_tab {
		margin-bottom: 2rpx;
	}

	.main {
		height: calc(100% - 90rpx);

		.invoice_1 {
			height: calc(100% - 94rpx);
			width: 100%;

			.invoice_main_1 {
				height: calc(100% - 270rpx);
				background-color: #ffffff;
				width: 100%;
				border-top: 1px solid #f2f5f9;
				position: relative;
			}

			.footer {
				height: 180rpx;

				.order_count {
					height: 64rpx;
					line-height: 64rpx;
					border-bottom: 1px solid #ebebeb;
					font-size: 14px;
					padding: 0 20rpx;
				}

				.methods {
					overflow: hidden;
					padding: 0 20rpx;
					height: calc(100% - 64rpx);

					.radio {
						float: left;
						position: relative;
						top: 30rpx;

						.text {
							display: inline-block;
							margin-left: 12rpx;
						}
					}

					.button {
						float: right;
						width: 180rpx;
						height: 80rpx;
						background-color: #ff5f0f;
						color: #ffffff;
						text-align: center;
						line-height: 80rpx;
						border-radius: 8px;
						position: relative;
						top: 20rpx;
					}
				}
			}
		}

		.invoice_2 {
			height: calc(100% - 94rpx);
			width: 100%;

			.invoice_main_2 {
				height: 100%;
				background-color: #ffffff;
				width: 100%;
				border-top: 1px solid #f2f5f9;
				position: relative;
			}
		}

		.no_data {
			width: 200rpx;
			font-size: 16px;
			color: #a6a6a6;
			text-align: center;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);

			image {
				width: 180rpx;
				height: 180rpx;
				display: block;
				margin-bottom: 20rpx;
			}
		}
	}
</style>