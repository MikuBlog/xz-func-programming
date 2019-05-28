	// 日期天数差
	function date_diff(sDate1,  sDate2){   
	    const iDays = sDate1 < sDate2 ? (new Date(sDate2) - new Date(sDate1)) : (new Date(sDate1) - new Date(sDate2))
	    return iDays / 1000 / 60 / 60 / 24 
	}
	
	date_diff("2019-01-01", "2018-12-31")// 1
	
	