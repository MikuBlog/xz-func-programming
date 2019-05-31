	// 模拟实现数组map方法
	function arrayMap(arr, fn) {
		let newArray = []
		for(let i = 0, len = arr.length; i < len; i ++) {
			newArray.push(fn(arr[i], i, arr))
		}
		return newArray
	}
	
	arrayMap([1, 2, 3], val => val * 3)// [3, 6, 9]