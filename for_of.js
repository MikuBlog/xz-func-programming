	// 模拟实现for of
	function forOf(obj, cb) {
		var iterator, result
		// 如果迭代器属性不为函数,报错
		if(typeof obj[Symbol.iterator] !== "function") 
			throw new TypeError(result + " is not iterable")
		// 如果第二个参数不为函数,报错
		if(typeof cb !== "function")
			throw new TypeError("cb must be callable")
		// 调用迭代器函数,返回迭代器对象
		iterator = obj[Symbol.iterator]()
		// 先获取结果
		result = iterator.next()
		// 如果done为false,表示还没有迭代完毕
		while(!result.done) {
			cb(result.value)
			result = iterator.next()
		}
	} 
