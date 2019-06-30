    		// 对象序列化
		function objToString(obj) {
			let str = ""
			for(let key in obj) {
				str += `${key}=${obj[key]}&`
			}
			return str.replace(/&$/, '')
		}
		
		objToString({
			name: "小狗",
			favor: "跑"
		}) // name=小狗&favor=跑
