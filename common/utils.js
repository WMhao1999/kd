//ajax请求
export function request(req) {
	const openid = setStore('get', 'openid') || '';
	const config = {
		method: "POST",
		data: {},
		dataType: "json",
		...req
	};
	config.data.openid = openid;
	return new Promise((resolve, reject) => {
		uni.request({
			method: config.method,
			url: config.url,
			data: config.data,
			header: {
				'content-type': 'application/json;charset=utf-8',
			},
			success: (res) => {
				console.log(res);
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					reject(new Error(res.statusCode));
				}
			},
			fail: (err) => {
				console.log(err);
				reject(err);
			},
		});
	});
};

//获取腾讯地图示例
export const getMapAPI = () => {
	const QQMapWX = require('@/libs/qqmap-wx-jssdk.js');
	return new QQMapWX({
		key: 'NAXBZ-RZ36H-3JSDO-WPJ7H-HWIEF-7EBE2'
	});
};

//获取登录服务商
export const loginProvider = () => {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service: 'oauth',
			success: function(res) {
				resolve(res.provider)
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
};

//获取数据存储下标
export function getIndexInArray(data, key, value) {
	let index = -1;
	for (let i = 0, leng = data.length; i < leng; i++) {
		if (data[i][key] === value) {
			index = i;
			break;
		}
	};
	return index;
};

//设置会话存储
export function setStore(type, key, value) {
	if (type === "get") {
		let data;
		uni.getStorage({
			key: key,
			success(res) {
				data = res.data;
			}
		});
		try {
			let json = JSON.parse(data);
			return json;
		} catch (err) {
			return data;
		}
	};
	if (type === "set") {
		let data;
		if (typeof value === "object") {
			data = JSON.stringify(value)
		} else {
			data = value;
		};
		uni.setStorage({
			key: key,
			data: data
		})
	};
};

//验证手机号合法性
export function validPhoneNumber(num) {
	const regex = /^1[3-9]\d{9}$/;
	return regex.test(num);
};

//验证密码合法性
export function validPassword(password) {
	const regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$/;
	return regex.test(password);
};

//加密手机号
export function encryptedPhoneNumber(phoneNumber) {
	const regex = /(\d{3})\d{4}(\d{4})/;
	const maskedNumber = phoneNumber.replace(regex, '$1****$2');
	return maskedNumber;
};

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