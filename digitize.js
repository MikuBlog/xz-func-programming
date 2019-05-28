	// 将数字字符串转化为数字数组
	function digitize(n) {
		return [...`${n}`].map(v => parseInt(v))
	}
	
	digitize(1001)// [1, 0, 0 ,1] 
