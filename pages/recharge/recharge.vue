<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">我的余额</block>
		</cu-custom>
		<view class="main">
			<view class="card">
				<view class="title">
					<view class="text">
						总余额
					</view>
					<view class="methods">
						<view class="lines">
							兑换
						</view>
						<view>
							账单
						</view>
					</view>
				</view>
				<view class="price">
					<view class="small_text">
						¥
					</view>
					0.00
				</view>
				<view class="options">
					<view class="item">
						<view class="title">
							充电账户余额
						</view>
						<view class="price">
							¥0.00
							<view class="icon cuIcon-right"></view>
						</view>
					</view>
					<view class="item">
						<view class="title">
							电卡账户余额
						</view>
						<view class="price">
							¥0.00
							<view class="icon cuIcon-right"></view>
						</view>
					</view>
					<view class="item">
						<view class="title">
							礼券账户余额
						</view>
						<view class="price">
							¥0.00
						</view>
					</view>
				</view>
			</view>
			<view class="white_card">
				<view class="title">
					充值金额
				</view>
				<view class="input_main">
					<view class="unit">
						¥
					</view>
					<view class="input">
						<input v-model="currPrice" type="number" class="custom-input">
					</view>
				</view>
				<view class="price_options">
					<view :class="item==currPrice?'active item':'item'" v-for="(item, index) in options" :key="index"
						@click="setPrice(item)">
						¥{{item}}
					</view>
				</view>
				<view class="tips">
					本次充值金额，只能用于充电消费
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="price">
				合计待支付：
				<view class="number">
					<view class="small_text">
						¥
					</view>
					{{currPrice}}
				</view>
			</view>
			<view class="sure_btn">
				确认支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [100, 200, 500],
				currPrice: 100
			}
		},
		methods: {
			setPrice(data) {
				this.currPrice = data
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		padding: 48rpx 32rpx;

		.card {
			color: #ffffff;
			width: 100%;
			min-height: 280rpx;
			background-color: #ff740f;
			border-radius: 16px;
			padding: 24rpx;
			margin-bottom: 48rpx;

			.title {
				margin-bottom: 20rpx;
				overflow: hidden;

				.text {
					float: left;
				}

				.methods {
					float: right;

					view {
						display: inline-block;
						margin-left: 16rpx;
					}
				}
			}

			&>.price {
				line-height: 100rpx;
				font-size: 30px;
				border-bottom: 1px solid #ff8727;
				margin-bottom: 20rpx;

				view {
					display: inline-block;
				}

				.small_text {
					margin-right: 12rpx;
				}
			}

			.options {
				display: flex;
				font-size: 14rpx;

				.item {
					flex: 1;


					.icon {
						display: inline-block;
					}
				}
			}
		}

		.white_card {
			width: 100%;
			min-height: 280rpx;
			background-color: #ffffff;
			border-radius: 16px;
			padding: 24rpx;

			.title {
				font-weight: bold;
				font-size: 16px;
				margin-bottom: 28rpx;
			}

			.input_main {
				overflow: hidden;
				height: 64rpx;

				.unit {
					float: left;
					width: 20rpx;
					position: relative;
					top: 6rpx;
				}

				.input {
					float: right;
					width: calc(100% - 20rpx);
				}
			}

			.price_options {
				display: flex;
				margin-bottom: 28rpx;

				.item {
					flex: 1;
					margin: 0 16rpx;
					height: 100rpx;
					border: 1px solid #d6d6d6;
					border-radius: 8px;
					text-align: center;
					line-height: 100rpx;
					font-size: 16px;
					font-weight: bold;
				}

				.active {
					border-color: #ff5f0f;
					background-color: #feebe9;
					color: #ff5f0f;
				}
			}

			.tips {
				font-size: 12px;
				color: #9a9da3;
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 180rpx;
		background-color: #ffffff;
		box-shadow: 0 0 20px 6px rgba(0, 0, 0, .2);
		padding: 32rpx 48rpx;

		.price {
			float: left;
			position: relative;
			top: 8rpx;

			.number {
				font-weight: bold;
				font-size: 22px;
				color: #e31937;
				margin-top: 18rpx;

				.small_text {
					display: inline-block;
					margin-right: 6rpx;
				}
			}
		}

		.sure_btn {
			float: right;
			width: 180rpx;
			height: 68rpx;
			line-height: 68rpx;
			border-radius: 8px;
			background-color: #e31937;
			text-align: center;
			color: #FFFFFF;
			font-size: 16px;
		}
	}
</style>