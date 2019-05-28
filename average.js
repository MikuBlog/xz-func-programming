	// 求平均数
	function average(...nums) {
		return nums.reduce((acc, val) => acc + val) / nums.length
	}
	
	average(1, 2, 3)// 2
	average(...[4, 5, 6])// 5