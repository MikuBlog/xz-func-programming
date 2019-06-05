	// 使用ES6扩展符
	function simplifyArray_1(array) {
		// 如果array中含有数组,则返回true,否则返回false
		while(array.some(items => Array.isArray(items))) {
			// 扁平化一次数组(根据判断是否还有数组来继续扁平化)
			array = [].concat(...array)
		}
		return array
	}
	
	// 使用reduce实现数组扁平化
	function simplifyArray_2(array) {
		return array.reduce((prev, next) => {
			return prev.concat(Array.isArray(next) ? simplifyArray(next) : next)
		}, [])
	}
	
	// 使用concat扁平化
	function simplifyArray_3(array) {
		var result = []
		array.forEach(items => {
			// 判断是否为数组
			Array.isArray(items) ?
			// 如果为数组,继续递归,返回的新数组连接到旧数组上
			result = result.concat(simplifyArray(items)) :
			// 如果不为数组,则直接将元素添加到数组末尾
			result.push(items)
		})
		return result
	}
	
	// 使用...扁平化
	function simplifyArray_4(array) {
		const myArray = []
		array.forEach(item => {
			// 判断是否为数组
			Array.isArray(item) ? 
			// 如果为数组,扁平化
			myArray.push(...simplifyArray(item)) : 
			// 如果不是数组,直接将元素添加到数组末尾
			myArray.push(item)
		})
		return myArray
	} 
