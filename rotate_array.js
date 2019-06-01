	// 旋转数组
	function rotateArray_1(arr, k) {
		// 从后往前剪切数组(当k等于三时，则从最后一个元素往前剪切三个),然后连接数组,完成数组旋转
		return arr.splice(-k % arr.length).concat(arr)
	}
	
	rotateArray([1, 2, 3, 4, 5], 3) // [3, 4, 5, 1, 2] 
	
	function rotateArray_2(arr, offset) {
		return [...arr.slice(offset), ...arr.slice(0, offset)]
	}
	
	rotateArray_2([1, 2, 3, 4, 5], 1)// [2, 3, 4, 5, 1]
	rotateArray_2([1, 2, 3, 4, 5], -1)// [5, 1, 2, 3, 4]
