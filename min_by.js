	// 寻找数组对象中的最小值
	function minBy(arr, fn) {
		return Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]))
	}
	
	minBy([{n: 3}, {n: 5}, {n: 1}], 'n')// 1
	minBy([{n: 3}, {n: 5}, {n: 1}], val => val.n)// 1