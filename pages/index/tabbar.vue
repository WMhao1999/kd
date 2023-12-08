<template>
	<view class="content">
		<view class="show_view">
			<index v-if="PageCur=='home'"></index>
			<codeNum v-if="PageCur=='similar'"></codeNum>
			<scanQR v-if="PageCur=='sub'"></scanQR>
			<vip v-if="PageCur=='cart'"></vip>
			<my v-if="PageCur=='mine'"></my>
		</view>

		<view class="cu-bar tabbar bg-white foot">
			<!-- 首页 -->
			<view class="action" :class="PageCur=='home'?'activeColor':'text-gray'" data-cur="home" @click="NavChange">
				<view class="cuIcon-cu-image">
					<image v-if="PageCur=='home'" :src="iconInfo.home.active"></image>
					<image v-if="PageCur!='home'" :src="iconInfo.home.default"></image>
				</view>
				首页
			</view>
			<!-- 枪编码 -->
			<view class="action" :class="PageCur=='similar'?'activeColor':'text-gray'" data-cur="similar"
				@click="NavChange">
				<view class="cuIcon-cu-image">
					<image v-if="PageCur=='similar'" :src="iconInfo.code.active"></image>
					<image v-if="PageCur!='similar'" :src="iconInfo.code.default"></image>
				</view>
				枪编码
			</view>
			<!-- 中间发布按钮 -->
			<view class="action add-action" :class="PageCur=='sub'?'activeColor':'text-gray'" data-cur="sub"
				@click="NavChange">
				<view class="cuIcon-cu-image">
					<image v-if="PageCur=='sub'" :src="iconInfo.scanQR.active"></image>
					<image v-if="PageCur!='sub'" :src="iconInfo.scanQR.default"></image>
				</view>
				一键扫码
			</view>
			<!-- 购物车、右上角有数字角标 -->
			<view class="action" :class="PageCur=='cart'?'activeColor':'text-gray'" data-cur="cart" @click="NavChange">
				<view class="cuIcon-cu-image">
					<image v-if="PageCur=='cart'" :src="iconInfo.vip.active"></image>
					<image v-if="PageCur!='cart'" :src="iconInfo.vip.default"></image>
				</view>
				VIP
			</view>
			<!-- 我的、左上角红色圆点 -->
			<view class="action" :class="PageCur=='mine'?'activeColor':'text-gray'" data-cur="mine" @click="NavChange">
				<view class="cuIcon-cu-image">
					<image v-if="PageCur=='mine'" :src="iconInfo.my.active"></image>
					<image v-if="PageCur!='mine'" :src="iconInfo.my.default"></image>
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	import index from "./index.vue"; //首页
	import codeNum from "./code.vue"; //技术视频
	import scanQR from "./scanQR.vue"; //宅家学
	import vip from "./vip.vue"; //资讯
	import my from "./my.vue"; //个人中心
	export default {
		components: {
			index,
			codeNum,
			scanQR,
			vip,
			my
		},
		data() {
			return {
				PageCur: 'home',
				iconInfo: {
					home: {
						default: "../../static/image/tabbar/home.svg",
						active: "../../static/image/tabbar/home-fill.svg"
					},
					code: {
						default: "../../static/image/tabbar/business-icon-feeds-logo.svg",
						active: "../../static/image/tabbar/business-icon-feeds-logo-fill.svg"
					},
					scanQR: {
						default: "../../static/image/tabbar/scan.svg",
						active: "../../static/image/tabbar/scan.svg"
					},
					vip: {
						default: "../../static/image/tabbar/vip.svg",
						active: "../../static/image/tabbar/vip-fill.svg"
					},
					my: {
						default: "../../static/image/tabbar/customer-bussinessman.svg",
						active: "../../static/image/tabbar/customer-businessman-fill.svg"
					}
				}
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style scoped lang="scss">
	.activeColor {
		color: #ff5f0f;
	}
	
	.show_view{
		height: calc(100% - 100rpx);
	}
</style>