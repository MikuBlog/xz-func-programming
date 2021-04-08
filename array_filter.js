// 模拟实现filter函数
Array.prototype.myFilter = function(cb) {
	let newArr = []
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			newArr.push(this[i])
		}
	}
	return newArr
}
