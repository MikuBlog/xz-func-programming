	// 使用reduce完成数组元素求和
	function sum(arr) {
		return arr.reduce((acc, val) => acc + val, 0)
	}
	
	sum([1, 2, 3, 4, 5, 6])// 21
