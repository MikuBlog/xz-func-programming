function getDepth(obj) {
	let deep = 1,
		arr = []
	if (!Object.keys(obj).length) {
		return 0
	}
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			deep += +getDepth(obj[key])
		}
		arr.push(deep)
		deep = 1
	}
	return Math.max(...arr)
}
