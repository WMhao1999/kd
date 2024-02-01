<script>
	import Vue from 'vue'
	import {
		getLoginConfig,
		setStore
	} from "./common/utils.js"
	import {
		loginRequest
	} from './common/api.js'

	export default {
		onLaunch: function() {
			//设置状态栏
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
		},
		onShow: async function() {
			//获取登录参数
			const config = await getLoginConfig();
			const res = await loginRequest(config);
			if (res.openid) {
				setStore("set", "openid", res.openid);
			} else {
				setStore("set", "openid", "");
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	/*每个页面公共css */
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-size: 14px;
	}

	.content {
		width: 100%;
		/* height: 100vh; */
	}
</style>