// 页面白名单，不受拦截
const whiteList = [
	'/pages/index/toolbar',
	'/pages/login/login',
	'/pages/login/register'
]

function hasPermission(url) {
	let islogin = uni.getStorageSync('token');
	islogin = islogin ? 1 : 0;
	// 在白名单中或有登录判断条件可以直接跳转
	if (whiteList.indexOf(url) !== -1 || islogin) {
		console.log('通过')
		return true
	}
	console.log('失败')
	return false
}
uni.addInterceptor('navigateTo', {
	// 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
	invoke(e) {
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return false
		}
		return true
	},
	success(e) {

	}
})

uni.addInterceptor('switchTab', {
	// tabbar页面跳转前进行拦截
	invoke(e) {
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			console.log('不在白名单内')
			return false
		}
		console.log('在白名单内')
		return true
	},
	success(e) {

	}
})