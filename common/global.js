//域名
const localhost = "https://zhupeiniang.com";

//状态栏高度
const getStatusBarHeight = () => {
	return uni.getSystemInfoSync().statusBarHeight;
};

export default {
	statusBarHeight: getStatusBarHeight(),
	localhost: localhost
}