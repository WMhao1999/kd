import {
	request
} from './utils.js';

//域名
const localhost = 'http://zhupeiniang.com';

//登录请求
export const loginRequest = (data) => {
	return new Promise((resolve, reject) => {
		request({
			url: localhost + '/userinfo',
			data: data
		}).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
};

//获取当前位置附近充电站列表
export const getChargingStationList = (data) => {
	return new Promise((resolve, reject) => {
		request({
			url: localhost + '/getChargingStationList',
			data: data
		}).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
}