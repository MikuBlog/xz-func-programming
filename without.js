	// 判断数组中还有哪些数字
	function without(arr, ...args) {
		return arr.filter((val, index) => !args.includes(val))
	}
	
	without([1, 2, 3], 1, 2)// [3]