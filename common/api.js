import {
	requset,
	loginProvider
} from "./utils.js";
import {
	tips
} from "./alert.js";

//登录
export const getLoginConfig = () => {
	return new Promise(async (resovle, reject) => {
		//获取设备信息
		const device = uni.getDeviceInfo();
		//请求信息
		const config = {
			...device
		};
		//获取运营商信息
		const provider = await loginProvider();
		config.provider = provider[0];
		uni.login({
			provider: provider[0],
			success: function(res) {
				const code = res.code;
				config.code = code;
				resovle(config);
			},
			fail: function(err) {
				reject(err);
			}
		});
	});
};