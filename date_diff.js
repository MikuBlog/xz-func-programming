	// 日期天数差
	function date_diff(sDate1,  sDate2, isNegative = false){   
		let iDays = ""
		isNegative
		? iDays = new Date(sDate1) - new Date(sDate2)
		: iDays = sDate1 < sDate2
		? (new Date(sDate2) - new Date(sDate1))
		: (new Date(sDate1) - new Date(sDate2))
	    return iDays / 1000 / 60 / 60 / 24 
	}
	
	date_diff("2019-01-01", "2018-12-31") // 1
	
	date_diff("2018-12-31", "2019-01-01") // 1
	
	date_diff("2018-12-31", "2019-01-01", true) // -1
	
	