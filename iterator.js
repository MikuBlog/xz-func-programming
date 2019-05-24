	// 简单实现迭代器
	function iterator(obj) {
		// 用一个私有变量,保存当前对象索引
		var i = 0
		// 调用迭代器函数,返回一个对象,该对象为迭代器对象
		return {
			next: function() {
				// 如果还没有迭代完,那么done为false
				var done = i >= obj.length ? true : false
				// 如果done为false,那么value就有值
				var value = !done ? obj[i++] : undefined
				// 返回一个对象,包含value和done属性
				return {
					value: value,
					done: done
				}
			}
		}
	}