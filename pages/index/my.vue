<template>
	<view class="content">
		<statusBar></statusBar>
		<view class="banner">

		</view>
		<view class="main">
			<view class="head_plot" @click="iconListShow=true">
				<image :src="userIcon" mode=""></image>
			</view>
			<view class="service" @click="jumpToService">
				<image src="../../static/image/my/rengongkefu.svg" mode=""></image>
			</view>
			<view class="setting">
				<image src="../../static/image/my/settings.svg" mode=""></image>
			</view>
			<view class="username">
				微风暖阳
			</view>
			<view class="userinfo">
				<view class="line item">
					<view class="value">
						<view class="small_title">
							¥
						</view>
						{{money}}
					</view>
					<view class="title">
						余额
					</view>
				</view>
				<view class="line item">
					<view class="value">
						{{discount}}
					</view>
					<view class="title">
						优惠券
					</view>
				</view>
				<view class="item">
					<view class="value">
						{{point}}
						<view class="small_title">
							kg
						</view>
					</view>
					<view class="title">
						碳积分
					</view>
				</view>
			</view>
			<view class="toolbar_info">
				<view class="lines solid-bottom">
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/order.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							订单
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/lable.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							发票
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/follow.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							收藏
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/coupon.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							券码兑换
						</view>
					</view>
				</view>
				<view class="lines">
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/business-icon-feeds.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							我的电桩
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/smile.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							我的评价
						</view>
					</view>
				</view>
			</view>
			<view class="toolbar_info">
				<view class="toolbar_title">
					我的爱车
				</view>
				<view class="lines">

				</view>
			</view>
			<view class="toolbar_info">
				<view class="toolbar_title">
					我的爱车
				</view>
				<view class="lines">
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/trust.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							商务合作
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/quick.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							道路救援
						</view>
					</view>
					<view class="lines_item">
						<view class="lines_item_icon">
							<image src="../../static/image/my/business-icon-feeds.svg" mode=""></image>
						</view>
						<view class="lines_item_title">
							营业执照
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal bottom-modal" :class="iconListShow?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green" @tap="updateUserIcon">确定</view>
					<view class="action text-blue" @tap="iconListShow=false">取消</view>
				</view>
				<view class="padding-xl">
					<view v-for="(item, index) in plot_list" :key="index" @click="select_id=index"
						:class="(select_id==index?'active':'') + ' item_user_plot'">
						<image :src="item.path" mode=""></image>
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
				money: 99999,
				discount: 6,
				point: 0,
				iconListShow: false,
				userIcon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fdf434177-70d9-4db6-9f82-7b4650ae415c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527290&t=fd01a5a13614015d39e3519e2d03380c",
				select_id: -1,
				plot_list: [{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5dbbd23d-3fe7-4c2e-8929-a234dfe2f31d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527290&t=cfcb0ce4297d2741e6926c4021f2c778",
						id: 0
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4062d2ee-9e4e-4817-b72a-418571d3dda6%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527290&t=33506aaa54e01c23154cf9e921297f18",
						id: 1
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc73fd06c-548a-4768-9643-7216ef9324b8%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527290&t=57cc33f66e22bdf0684e03a8f1fd82d1",
						id: 2
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F512074d2-ea03-456a-a840-d1f142f34b11%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527290&t=08ce1b8ab9f856f36bf3c01d96da28f8",
						id: 3
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201908%2F14%2F20190814002353_xuwxh.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527289&t=f620f23c7e8e69c1969811d6155b5875",
						id: 4
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F21%2F20200521135528_Mvkiz.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527289&t=f94fdc00ec255c13b4e660a1f3dbcfe4",
						id: 5
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F12%2F20200612202548_xixhm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527289&t=b24d701ef126a76ec25c13a23c8d0c19",
						id: 6
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F29%2F20200429220225_pgjkw.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527289&t=d4e57aca5f07ee4d3874271ea44c2890",
						id: 7
					},
					{
						path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F15%2F20200315074345_ksvms.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704527289&t=23f1abc6a224ae2026cd4e6d5c3330a4",
						id: 8
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			updateUserIcon() {
				this.userIcon = this.plot_list[this.select_id].path;
				this.iconListShow = false;
			},
			jumpToService() {
				uni.navigateTo({
					url: "/pages/service/index"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		background-color: #f9efe6;

		.banner {
			width: 100%;
			height: 280rpx;
			background-color: #f9efe6;
		}

		.main {
			background-color: #f8f8f8;
			position: relative;
			top: -30rpx;
			border-radius: 14px 14px 0 0;
			padding: 80rpx 40rpx 100rpx;

			.head_plot {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				background-color: #ffffff;
				position: absolute;
				left: 40rpx;
				top: -60rpx;
				padding: 12rpx;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.service {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				background-color: #ffffff;
				position: absolute;
				top: 10rpx;
				right: 140rpx;
				line-height: 60rpx;
				text-align: center;
				padding-top: 6rpx;

				image {
					width: 80%;
					height: 80%;
					display: inline-block;
				}
			}

			.setting {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				background-color: #ffffff;
				position: absolute;
				top: 10rpx;
				right: 40rpx;
				line-height: 60rpx;
				text-align: center;
				padding-top: 6rpx;

				image {
					width: 80%;
					height: 80%;
					display: inline-block;
				}
			}

			.username {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 40rpx;
			}

			.userinfo {
				width: 100%;
				height: 160rpx;
				background-color: #ffffff;
				border-radius: 16px;
				margin-bottom: 40rpx;
				display: flex;

				.item {
					flex: 1;
					height: 100%;
					padding: 40rpx 30rpx;
					text-align: center;

					.value {
						font-weight: bold;
						font-size: 18px;
						margin-bottom: 12rpx;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}

					.title {
						font-weight: bold;
						font-size: 14px;
					}

					.small_title {
						font-size: 12px;
						display: inline-block;
					}
				}

				.line {
					position: relative;

					&::after {
						content: "";
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						height: 60rpx;
						width: 1px;
						background-color: #e5e5e5;
					}
				}
			}

			.toolbar_info {
				width: 100%;
				background-color: #ffffff;
				border-radius: 16px;
				margin-bottom: 40rpx;
				padding: 0 30rpx;

				.toolbar_title {
					padding-top: 26rpx;
					font-size: 16px;
					font-weight: bold;
				}

				.lines {
					height: 160rpx;

					.lines_item {
						width: 25%;
						padding-top: 22rpx;
						float: left;

						.lines_item_icon {
							text-align: center;

							image {
								width: 80rpx;
								height: 80rpx;
								margin: 0 auto;
								display: inline-block;
							}
						}

						.lines_item_title {
							text-align: center;
							font-size: 14px;
						}

					}
				}
			}
		}

		.padding-xl {
			overflow: hidden;
		}

		.item_user_plot {
			width: 25%;
			height: 120rpx;
			float: left;
			text-align: center;
			margin-bottom: 20rpx;

			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				display: inline-block;
			}
		}

		.active {

			image {
				border: 2px solid #ff5f0f;
			}
		}
	}
</style>