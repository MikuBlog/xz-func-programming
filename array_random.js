	// 数组乱序（彻底乱序）
	function shuffle(array) {
		var i, j, t 
		// 通过遍历数组,随机调换数组元素
		for(i = array.length; i; i --) {
			j = Math.floor(Math.random() * i)
			t = array[i - 1]
			array[i - 1] = array[j]
			array[j] = t
		}
		return array
	}
	
	// 数组乱序（无影响）
	function shuffle(array) {
		var i, j, t, picArr = [...array]
		// 通过遍历数组,随机调换数组元素
		for(i = picArr.length; i; i --) {
			j = Math.floor(Math.random() * i)
			t = picArr[i - 1]
			picArr[i - 1] = array[j]
			picArr[j] = t
		}
		return picArr 	
	}