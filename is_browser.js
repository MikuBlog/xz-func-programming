	// 简单判断当前环境
	function isBrowser() {
		return ![typeof window, typeof document].includes('undefined')
	}
	
	console.log(isBrowser())// true(browser)
	console.log(isBrowser())// false(Node)