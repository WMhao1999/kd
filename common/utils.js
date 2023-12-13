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