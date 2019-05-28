	// 获取样式
	function getStyle(el, ruleName) {
		return getComputedStyle(el)[ruleName]
	}
	
	getStyle(document.querySelector('.float'), 'width')// 100px