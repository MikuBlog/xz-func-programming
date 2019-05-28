	// 解析Cookie
	function parseCookie(ck) {
		return ck.split(';')
		.map(v => v.split('='))
		.reduce((acc, v) => {
			// 去除键值前后的空格,并对字符串进行解码
			acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
			return acc
		}, {})
	}
	
	parseCookie('foo=bar; equation=E%3Dmc%5E2')// { foo: 'bar', equation: 'E=mc^2' }