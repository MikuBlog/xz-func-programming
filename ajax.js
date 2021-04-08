/**
 * 手写ajax
 * 
 * 注意点：
 * 1. xhr.onerror方法
 * 2. xhr.ontimeout方法，带上timeout
 * 3. xhr.open中带有async操作
 * 4. xhr.readyState为4的时候才是请求响应结束，这时候通过判断状态码来查看响应状态
 * 5. 发送数据时需要转码
 */
function ajax(options) {
	let {
		url,
		type,
		isAsync,
		headers,
		success,
		error,
		timeout,
		data
	} = options,
	xhr = new XMLHttpRequest()
	return new Promise((resolve, reject) => {
		let rejected = e => { error && error(e); reject(e) }
		xhr.timeout = timeout || 5000
		xhr.ontimeout = rejected
		xhr.onerror = rejected
		xhr.onreadystatechange = e => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
					success && success(xhr.responseText)
					resolve(e.responseText)
				} else {
					rejected(e.responseText)
				}
			}
		}
		let params = [], newParams = ""
		if (data) {
			for (let key in data) {
				params.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
			}
			newParams = params.join("&")
		}
		if (type.toLowerCase() === 'get') {
			if (url.indexOf('?') === -1) {
				url += `?${params}`
			} else {
				url += `&${parmas}`
			}
		}
		xhr.open(type || 'get', url, isAsync || false)
		xhr.send(newParams)
	})
}
