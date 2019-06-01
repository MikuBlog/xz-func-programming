	// 简单模拟array的reduce方法
	function arrayReduce(arr, fn, initialVal) {
		let i, val = ""
		initialVal ? 
		(val = initialVal, i = 0) : 
		(val = arr[0], i = 1)
		while(arr[i]) {
			arr[i] && (val = fn(val, arr[i]))
			i ++
		}
		return val
	}

	arrayReduce([1, 2, 3], (acc, next) => acc + next)// 6
	arrayReduce([1, 2, 3], (acc, next) => acc + next, 5)// 11
