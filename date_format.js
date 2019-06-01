	// 日期格式化
	function formDate_1(dateTime, isAccurate) {
		let date =  dateTime ? new Date(dateTime) : new Date()
		let time = ""
		isAccurate && (time = (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours())
			+ ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes())
			+ ":" + (date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds()))
		let newDate = date.getFullYear() +
		"-" +
		(date.getMonth() + 1 >= 10 ? date.getMonth() + 1: "0" + (date.getMonth() + 1)) +
		"-" +
		(date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()) + " " +(isAccurate ? time : "")
		return newDate
	}
	
	function formDate_2(dateTime, isAccurate) {
		(Object(dateTime) instanceof Boolean && dateTime == true) ? (dateTime = "", isAccurate = true) : dateTime = ""
		let nowDate = new Date()
		let time = "", date =  dateTime ? new Date(dateTime) : new Date(nowDate.getTime() - (nowDate.getTimezoneOffset() * 60000))
		let newDate = date.toISOString().split("T")[0]
		isAccurate && (newDate = `${date.toISOString().split("T")[0]} ${date.toISOString().split("T")[1].split('.')[0]}`)
		return newDate
	}