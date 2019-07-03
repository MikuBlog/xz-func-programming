	let array_1 = [1, 3, 5, 7], 
		array_2 = [9, 11, 13, 15],
		array_3 = [17, 19, 21, 23]
	
	// 获取组合数组的第n个元素	
	function getElefromArray(n, ...arr) {
		return arr.reduce((prev, next) => prev.concat(next), [])[n - 1]
	}
	
	getIndex(10, array_1, array_2, array_3) // 19