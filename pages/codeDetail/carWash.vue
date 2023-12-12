<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">洗车中</block>
		</cu-custom>
		<view class="main">
			<view class="item_card">
				<view class="title">
					水枪冲洗
					<view class="time">
						(0元/分钟)
					</view>
				</view>
				<view class="calc_time">
					00分00秒
				</view>
			</view>
			<view class="item_card">
				<view class="title">
					喷洒泡沫
					<view class="time">
						(0元/分钟)
					</view>
				</view>
				<view class="calc_time">
					00分00秒
				</view>
			</view>
			<view class="item_card">
				<view class="title">
					吸尘器
					<view class="time">
						(0元/分钟)
					</view>
				</view>
				<view class="calc_time">
					00分00秒
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="price">
				总金额 :
				<view class="number">
					0
				</view>
			</view>
			<view class="sure_btn">
				结算
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.main {
		padding: 20rpx 16rpx;

		.item_card {
			background-color: #ffffff;
			padding: 48rpx 32rpx;
			border-radius: 8px;
			margin-bottom: 20rpx;
			font-weight: bold;
			overflow: hidden;

			&>.title {
				float: left;
				font-size: 16px;

				.time {
					display: inline-block;
					margin-left: 8rpx;
					font-size: 10px;
					color: #999999;
				}
			}

			&>.calc_time {
				float: right;
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

		.price {
			float: left;

			.number {
				display: inline-block;
				margin-left: 16rpx;
				font-weight: bold;
				font-size: 22px;
				color: #e31937;

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