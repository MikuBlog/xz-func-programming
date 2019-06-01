	// 模拟实现some函数
	function arraySome(arr, fn) {
		for(let i = 0, len = arr.length; i < len; i ++) {
			if(fn(arr[i])) return true
		}
		return false
	}
	
	arraySome([1, 2, 3, 4], val => val >= 4)// true
	arraySome([1, 2, 3, 4], val => val >= 5)// false