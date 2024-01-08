export function tips(message, time = 200) {
	uni.showToast({
		title: message,
		icon: "none",
		time: time
	});
}