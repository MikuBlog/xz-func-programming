	// 使用查找的方式去重(多维数组)
	function unique_1(array) {
		const myArray = []
		array.forEach(item => {
			// 如果是数组
			Array.isArray(item) ? 
			// 递归
			myArray.push(simplifyArray(item)) : 
			// 如果新数组中没有该元素,则将其添加到新数组中
			(myArray.indexOf(item) === -1 && myArray.push(item))
		})
		return myArray
	}
	
	// 对比前后两个进行去重(一维数组)
	function unique_2(array) {
		return array.concat().sort().filter(function(item, index, array){
			return !index || item !== array[index - 1]
		})
	}
	
	// 使用ES6的Set类数组去重（一维数组）
	function unique_3(array) {
		return [...new Set(array)]
	}
	
	// 使用filter去重
	function unique_4(array) {
		// indexOf只会返回数组中第一次出现该元素的位置
		return array.filter((item, index, array) => {
			return array.indexOf(item) === index
		})
	}
