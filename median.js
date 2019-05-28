	// 取数组的中位数
	function median(arr) {
		const mid = Math.floor(arr.length / 2)
		const num = arr.sort((a, b) => a - b)
		return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2
	}
	
	median([2, 1, 3, 5, 4, 7])// 3.5 
