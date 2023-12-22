<template>
	<view class="content">
		<cu-custom :url="backUrl" bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content"></block>
		</cu-custom>
		<view class="main_1" v-if="step==1">
			<view class="title">
				<view class="title_bg">
					注册
				</view>
				***~
			</view>
			<view class="second_title">
				完成快速注册/登录
			</view>
			<view class="phone_main">
				<view class="start_num">
					+86
				</view>
				<input type="number" placeholder="请输入手机号">
			</view>
			<view class="login_main">
				<view class="button">
					下一步
				</view>
				<view class="agreement">
					登录代表您以同意《注册协议以及隐私政策》
				</view>
			</view>
			<view class="more_login">
				<view class="title">
					<view class="text">
						其他登录方式
					</view>
				</view>
				<view class="more_option">
					<view class="option cuIcon-weixin"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				backUrl: "../index/toobar",
				step: 1
			}
		}
	};
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		height: 100vh;
		background-color: #FFFFFF;
		padding: 16rpx 32rpx;

		.main_1 {
			width: 100%;

			&>.title {
				font-size: 38rpx;
				font-weight: 600;
				color: #34485E;
				line-height: 60rpx;
				margin-bottom: 22rpx;

				.title_bg {
					display: inline-block;
					background-color: #ff5f0f;
					color: #FFFFFF;
					padding: 0 16rpx;
				}
			}

			&>.second_title {
				font-size: 26rpx;
				font-weight: 600;
				color: #34485E;
				line-height: 37rpx;
				padding-left: 48rpx;
				margin-bottom: 120rpx;
			}

			.phone_main {
				width: calc(100% - 96rpx);
				margin: 0 auto;
				border-bottom: 1px solid #979797;
				overflow: hidden;
				margin-bottom: 170rpx;

				.start_num {
					float: left;
					font-size: 36rpx;
					line-height: 50rpx;
					margin-right: 20rpx;
				}
			}

			.login_main {
				text-align: center;
				margin-bottom: 260rpx;

				.button {
					width: 343rpx;
					height: 70rpx;
					line-height: 70rpx;
					background: #ff5f0f;
					border-radius: 36rpx;
					margin: 0 auto;
					font-size: 34rpx;
					font-weight: 500;
					color: #FFFFFF;
					margin-bottom: 22rpx;
				}

				.agreement {
					font-size: 20rpx;
					font-weight: 400;
					color: #A4A4A4;
					line-height: 28rpx;
				}
			}

			.more_login {


				.title {
					text-align: center;
					margin-bottom: 42rpx;

					.text {
						font-size: 24rpx;
						font-weight: 500;
						color: #4A4A4A;
						position: relative;
						display: inline-block;

						&::after {
							content: "";
							width: 140rpx;
							height: 2rpx;
							position: absolute;
							left: -160rpx;
							top: 50%;
							transform: translateY(-50%);
							background-color: #D3D3D3;
						}

						&::before {
							content: "";
							width: 140rpx;
							height: 2rpx;
							position: absolute;
							right: -160rpx;
							top: 50%;
							transform: translateY(-50%);
							background-color: #D3D3D3;
						}
					}
				}

				.more_option {
					text-align: center;

					.option {
						display: inline-block;
						width: 80rpx;
						height: 80rpx;
						background: #04D102;
						border-radius: 50%;
						margin: 0 8rpx;
						color: #FFFFFF;
						line-height: 74rpx;
						font-size: 30px;
					}
				}
			}
		}
	}
</style>