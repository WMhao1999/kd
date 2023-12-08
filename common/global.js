const getStatusBarHeight = () => {
	return uni.getSystemInfoSync().statusBarHeight;
};

export default {
	statusBarHeight: getStatusBarHeight()
}