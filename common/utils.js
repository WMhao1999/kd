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