/**
 * n次并发请求控制
 * 
 * 思路：
 * 1. 通过promise.all来接收并发请求后的结果
 * 2. 每次promise.all成功后重复调用handler函数，直到请求池全部请求完毕
 * 3. 请求完毕后执行resolve，如果出错则执行reject
 */
function request(n) {
	return new Promise((resolve, reject) => {
		setTimeout(_ => {
			resolve(n)
		}, 1000)
	})
}

function sendRequest(urls, max = 3) {
	return new Promise((resolve, reject) => {
		let result = []
		function handler() {
			let promises = []
			if (!urls.length) {
				resolve(result)
				return
			}
			for (let i = 0; i < max; i++) {
				if (!urls.length) break
				let url = urls.shift()
				promises.push(request(url))
			}
			Promise.all(promises).then(res => {
				result.push(res)
				handler()
			}, reject)
		}
		handler()
	})
}
