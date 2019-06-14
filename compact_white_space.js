	// 去除两个及以上的空白字符
	function compactWhiteSpace(str) {
		return str.replace(/\s{2,}/g, ' ')
	}
	
	compactWhiteSpace("I am     xuan  \n\n\n zai")// I am xuan zai 