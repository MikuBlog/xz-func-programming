	// 从右方开始去除数组元素
	function dropRight(arr, n) {
		return arr.slice(0, -n)
	}
	
	dropRight([1, 2, 3, 4, 5], 2)// [1, 2, 3]
	dropRight([1, 2, 3, 4, 5], -2))// [1, 2]