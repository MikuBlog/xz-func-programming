	// 获取分数
	function getRate(rate) {
		if(rate >= 0 && rate <=5)
			return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
		else
			throw new Error("分数只能在0~5之间")
	}
	
	getRate(5) // ★★★★★