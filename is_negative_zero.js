	// 判断传入的值是否为-0
	function isNegativeZero(val) {
		return val === 0 && 1 / val === -Infinity 
	}
	
	isNegativeZero(0)// false
	isNegativeZero(-0)// true