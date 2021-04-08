/**
 * 手写jsonp跨域
 */
function jsonp({
	url,
	params,
	callbackName
}) {
	const generateUrl = () => {
		let dataSrc = []
		for (let key in params) {
			dataSrc.push(`${encodeURIComponent(key)}=${params[key]}`)
		}
		return `${url}?${dataSrc.join("&")}&callback=${callbackName}`
	}
	return new Promise((resolve, reject) => {
		const ele = document.createElement('script')
		ele.src = generateUrl()
		document.body.appendChild(ele)
		window[callbackName] = data => {
			resolve(data)
			document.body.removeChild(ele)
		}
	})
}
