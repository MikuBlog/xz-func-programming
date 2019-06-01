	// 模拟实现every函数
	function arrayEvery(arr, fn) {
		for(let i = 0, len = arr.length; i < len; i ++) {
			if(!fn(arr[i])) return false
		}
		return true
	}
	
	arrayEvery([1, 2, 3, 4], val => val >= 4)// false
	arrayEvery([1, 2, 3, 4], val => val >= 1)// true