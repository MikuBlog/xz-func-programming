/**
 * 请求池
 * 思路：在下一个nextTick开始并发请求，通过Promise.all实现并发请求，并发请求完毕之后再次Promise.all
 */
function createRequest({
	pool
}) {
	let
		list = [],
		requestList = [],
		result = []

	function ready() {
		let len = list.length > pool ?
			pool :
			list.length
		requestList = []
		for (let i = 0; i < len; i++) {
			requestList.push(list.shift())
		}
		toRequest()
	}

	function toRequest() {
		return Promise.all(requestList.map(val => new Promise((resolve, reject) => {
			setTimeout(_ => {
				resolve(val)
			}, 1000)
		}))).then(result => {
			if (list.length) {
				ready()
			}
			console.log(result)
		})
	}
	Promise.resolve().then(_ => {
		ready()
	})
	return function(url) {
		list.push(url)
	}
}
