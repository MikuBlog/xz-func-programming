	// 日期格式化
	function formDate(dateTime, isAccurate) {
		let date =  dateTime ? new Date(dateTime) : new Date()
		let time = ""
		if(isAccurate) {
			time = (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours())
			+ ":" + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes())
			+ ":" + (date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds())
		}
		let newDate = date.getFullYear() +
		"-" +
		(date.getMonth() + 1 >= 10 ? date.getMonth() + 1: "0" + (date.getMonth() + 1)) +
		"-" +
		(date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()) + " " +(isAccurate ? time : "")
		return newDate
	}