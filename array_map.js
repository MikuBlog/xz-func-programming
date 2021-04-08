// 模拟实现数组map方法
Array.prototype.myMap = function(cb) {
	let newArr = []
	for (let i = 0; i < this.length; i++) {
		newArr[i] = cb(this[i], i, this)
	}
	return newArr
}
