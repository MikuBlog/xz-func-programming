	// 模拟实现filter函数123123123
	function arrayFilter(arr, fn) {
		let newArray = []
		for(let i = 0, len = arr.length; i < len; i ++) {
			fn(arr[i]) && newArray.push(arr[i])
		}
		return newArray
	}
	
	arrayFilter([1, 2, 3, 4], val => val >= 3)// [3, 4]