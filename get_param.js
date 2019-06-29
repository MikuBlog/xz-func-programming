	// 获取url后的参数
	function getParam(key) {
		if(!location.search) {
			throw new Error("无参数")
		}
		const paramList = location.search.split('?')[1].split('&')
		for(let i = 0, len = paramList.length; i < paramList.length; i ++) {
			const params = paramList[i].split('=')
			if(params[0] === key) {
				return decodeURIComponent(params[1])
			}
		}
		return false
	}
	
	// http://xxx.com?type=头像
	getParam('type') // 头像