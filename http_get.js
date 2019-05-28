	// 简单封装http请求
	function httpGet(url, callback, err = console.error) {
		const request = new XMLHttpRequest()
		request.open('GET', url, true)
		request.onload = () => callback(request.responseText)
		request.onerror = err(request)
		request.send()
	}
	
	httpGet("http://myinterface.xuanzai.top/getData", (value) => {
		console.log(value)
	}) 
