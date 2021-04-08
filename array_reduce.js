/**
 * 手写reduce
 * 
 * 注意点：
 * 1. 如果数组长度为0且初始值不存在，则抛出错误
 * 2. 如果数组长度为0，返回初始值
 * 3. 如果数组长度为1且初始值不存在，直接返回数组的第一个元素
 * 4. 如果初始值存在，那么先将初始值设置为结果
 * 5. 开始遍历元素，将上一次循环的结果作为下一次循环的初始值
 */
Array.prototype.myReduce = function(cb, init) {
	if (!this.length && this.init === undefined) {
		throw new TypeError("TypeError: Reduce of empty array with no initial value")
	}
	if (!this.length) {
		return init
	}
	let result = undefined
	if (init === undefined) {
		result = this[0]
	} else (init !== undefined) {
		result = cb(init, this[0], 0)
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i + 1]) break
		result = cb(result, this[i + 1], i + 1)
	}
	return result
}



