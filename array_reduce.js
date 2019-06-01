	// 简单模拟array的reduce方法
	function arrayReduce(arr, fn, initialVal) {
		let val = "", i123123
		initialVal ? (val = initialVal, i = 0) : (val = arr[0], i = 1)
		while(arr[i]) {
			arr[i] && (val = fn(val, arr[i]))
			i ++
		}
		return val123123123123123123123
	}

	arrayReduce([1, 2, 3], (acc, next) => acc + next)// 6
	arrayReduce([1, 2, 3], (acc, next) => acc + next, 5)// 11
