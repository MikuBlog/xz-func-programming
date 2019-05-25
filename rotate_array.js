	// 旋转数组
	function rotateArray(arr, k) {
		// 从后往前剪切数组(当k等于三时，则从最后一个元素往前剪切三个),然后连接数组,完成数组旋转
		return arr.splice(-k % arr.length).concat(arr)
	}