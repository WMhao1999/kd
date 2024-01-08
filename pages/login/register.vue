<template>
	<view class="content">
		<cu-custom :url="backUrl" bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content"></block>
		</cu-custom>
		<view class="main" v-if="step==1">
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
				<input v-model="telNumber" type="number" placeholder="请输入手机号">
			</view>
			<view class="login_main">
				<view @click="nextStep(1)" class="button">
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
		<view class="main" v-if="step==2">
			<view class="title">
				<view class="title_bg">
					请输
				</view>
				入验证码~
			</view>
			<view class="second_title">
				验证码已发送至：{{telNumber}}
			</view>
			<view class="ver_code">
				<view class="code_item">
					<input v-model="verCode.first" type="number">
				</view>
				<view class="code_item">
					<input v-model="verCode.second" type="number">
				</view>
				<view class="code_item">
					<input v-model="verCode.thired" type="number">
				</view>
				<view class="code_item">
					<input v-model="verCode.fourth" type="number">
				</view>
			</view>
			<view class="ver_code_method">
				<view class="time" v-if="times>=0">
					{{times}}s
				</view>
				<view @click="resendVaildCode" class="time" v-if="times<0">
					重新发送
				</view>
				<view class="method">
					获取不到验证码？
				</view>
			</view>
			<view class="login_main">
				<view @click="nextStep(2)" class="button">
					下一步
				</view>
			</view>
		</view>
		<view class="main" v-if="step==3">
			<view class="title">
				<view class="title_bg">
					请设
				</view>
				置登陆密码~
			</view>
			<view class="second_title">
				请输入{{telNumber}}的登录密码
			</view>
			<view class="password_main">
				<input v-model="password" type="password" placeholder="6-16位密码">
			</view>
			<view class="password_tips">
				可设置为字母与数字组合，最少6位，最多16位
			</view>
			<view class="login_main">
				<view @click="nextStep(3)" class="button">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//验证方法
	import {
		validPhoneNumber,
		validPassword
	} from "@/common/utils.js";
	//弹出层
	import {
		tips
	} from "@/common/alert.js";

	export default {
		data() {
			return {
				backUrl: "./login",
				step: 1,
				telNumber: "",
				times: 60,
				numTimer: null,
				verCode: {
					first: "",
					second: "",
					thired: "",
					fourth: ""
				},
				password: ""
			}
		},
		methods: {
			nextStep(step) {
				if (step == 1) {
					const validNum = validPhoneNumber(this.telNumber);
					if (!validNum) {
						tips("请输入正确的手机号");
					} else {
						this.step = 2;
						this.sendVaildCode();
					}
				};
				if (step == 2) {
					let vaildCode = true;
					const data = this.verCode;
					for (let i in data) {
						if (data[i] == "") {
							vaildCode = false;
							break;
						}
					};
					if (!vaildCode) {
						tips("请输入正确验证码")
					} else {
						//验证码校验
						//...
						this.step = 3;
					}
				};
				if (step == 3) {
					const vaildPassword = validPassword(this.password);
					if (!vaildPassword) {
						tips("密码格式错误")
					} else {
						//发送密码请求
						//...
						//跳转至登录
						uni.navigateTo({
							url: "/pages/login/login"
						})
					}
				}
			},
			sendVaildCode() {
				//发送请求获取验证码
				//.....
				//创建定时器
				this.numTimer = setInterval(() => {
					this.times -= 1;
					if (this.times < 0) {
						clearInterval(this.numTimer);
						this.numTimer = null;
					}
				}, 1000);
			},
			resendVaildCode() {
				this.times = 60;
				this.sendVaildCode();
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

		.main {
			width: 100%;

			&>.title {
				font-size: 32rpx;
				font-weight: 600;
				color: #34485E;
				line-height: 60rpx;
				margin-bottom: 22rpx;

				.title_bg {
					display: inline-block;
					background-color: #ff5f0f;
					color: #FFFFFF;
					padding: 0 16rpx;
					font-size: 32rpx;
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

			.ver_code {
				text-align: center;
				margin-bottom: 40rpx;

				.code_item {
					display: inline-block;
					width: 60rpx;
					height: 60rpx;
					border: 1px solid #979797;
					margin: 0 30rpx;

					input {
						width: 100%;
						height: 100%;
					}
				}
			}

			.ver_code_method {
				margin-bottom: 170rpx;
				overflow: hidden;
				padding: 0 40rpx;
				font-size: 12px;
				color: #34485E;

				.time {
					float: left;
				}

				.method {
					float: right;
				}
			}

			.password_main {
				width: calc(100% - 96rpx);
				margin: 0 auto;
				border-bottom: 1px solid #979797;
				overflow: hidden;
				margin-bottom: 20rpx;
			}

			.password_tips {
				width: calc(100% - 96rpx);
				margin: 0 auto;
				font-size: 20rpx;
				color: #A4A4A4;
				margin-bottom: 170rpx;
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