	// 根据index返回第n个数组
	function getArrFromInd(n, ...arr) {
		let lenArr = [], times = 0
		for(let i = 0, len = arr.length; i < len; i ++) {
			lenArr.push(arr[i].length)
		}
		for(let i = 0, len = lenArr.length; i < len; i ++) {
			times += lenArr[i]
			if(n <= times) {
				return i + 1
			}
		}
		return false
	}
	
	getArrFromInd(3, array_1, array_2, array_3) // 1
	getArrFromInd(10, array_1, array_2, array_3) // 3