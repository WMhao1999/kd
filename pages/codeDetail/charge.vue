<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">充电站</block>
		</cu-custom>
		<view class="main">
			<view class="item_card">
				<view class="title">
					<view class="line">
						交流
					</view>
					<view class="line">
						80.0kW
					</view>
					<view>
						枪编号：123
					</view>
				</view>
				<view class="rows">
					<view class="rows_title">
						充电价格
						<view class="rows_title_time">
							(8:00 - 11:29)
						</view>
					</view>
					<view class="jump_icon">
						价格详情
						<view class="icon cuIcon-right"></view>
					</view>
				</view>
				<view class="child_card">
					<view class="name">
						快电价
					</view>
					<view class="price">
						1.29
						<view class="price_unit">
							元/度
						</view>
					</view>
				</view>
			</view>
			<view class="item_card">
				<view class="p_title">
					<view class="p_icon">
						P
					</view>
					免费停车
				</view>
				<view class="text">
					免费
				</view>
			</view>
			<view class="item_card">
				<view class="p_title">
					支付方式
				</view>
				<form>
					<radio-group class="block" @change="RadioChange">
						<view class="cu-form-group">
							<view class="title">充值账户</view>
							<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
						</view>
					</radio-group>
					<radio-group class="block" @change="RadioChange">
						<view class="cu-form-group">
							<view class="title">微信支付分</view>
							<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
						</view>
					</radio-group>
				</form>
			</view>
		</view>
		<view class="start_btn">
			插枪并开始充电
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: ""
			}
		},
		methods: {
			RadioChange(ev) {
				const value = ev.detail.value
				this.radio = value;
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		padding: 20rpx 16rpx;

		.item_card {
			background-color: #ffffff;
			padding: 32rpx;
			border-radius: 8px;
			margin-bottom: 20rpx;

			&>.title {
				border-bottom: 1px solid #eeeeee;
				padding-bottom: 18rpx;

				view {
					display: inline-block;
					padding: 0 18rpx;
					font-size: 10px;
					color: #999999;
				}

				.line {
					position: relative;

					&::after {
						content: "";
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						height: 16rpx;
						width: 1px;
						background-color: #e5e5e5;
					}
				}
			}

			.rows {
				overflow: hidden;
				padding: 0 16rpx;
				height: 100rpx;
				line-height: 100rpx;

				.rows_title {
					float: left;

					.rows_title_time {
						display: inline-block;
						margin-left: 16rpx;
						font-size: 10px;
						color: #999999;
					}
				}

				.jump_icon {
					float: right;

					.icon {
						display: inline-block;
						margin-left: 6rpx;
					}
				}
			}

			.child_card {
				background-color: #fff8f2;
				padding: 32rpx;
				border-radius: 8px;

				.name {
					font-size: 12px;
					color: #ff5f0f;
					margin-bottom: 20rpx;
				}

				.price {
					font-size: 18px;
					font-weight: bold;
					color: #ff5f0f;

					.price_unit {
						font-size: 10px;
						color: #8c8c8c;
						margin-left: 12rpx;
						display: inline-block;
						font-weight: 400;
					}
				}
			}

			.p_title {
				font-weight: bold;
				margin-bottom: 20rpx;

				.p_icon {
					display: inline-block;
					width: 48rpx;
					height: 48rpx;
					background-color: #dff0ff;
					border-radius: 6px;
					text-align: center;
					line-height: 48rpx;
					font-size: 14px;
					color: #61a8ff;
					margin-right: 16rpx;
				}
			}

			.text {
				padding: 0 16rpx;
			}
		}
	}

	.start_btn {
		width: 80%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		text-align: center;
		margin: 0 auto;
		font-size: 16px;
		color: #ffffff;
		background-color: #ff5f0f;
	}
</style>