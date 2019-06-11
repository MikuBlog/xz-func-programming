	// 获取字符串长度
	function getByteSize(value) {
		return new Blob([value]).size
	}
	
	getByteSize("旋仔")// 3
	getByteSize("Hello")// 5