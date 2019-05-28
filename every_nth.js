	// 保留对应倍数索引元素
	function everyNth(arr, nth) {
		return arr.filter((val, ind) => ind % nth === nth - 1)
	} 
	
	everyNth([1, 2, 3, 4, 5, 6], 3)// [3, 6]
	everyNth([1, 2, 3, 4, 5, 6], 2)// [2, 4, 6]
