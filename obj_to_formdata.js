		// 对象转FormData
		function objToFormData(obj) {
			const formData = new FormData()
			for(let key in obj) {
				formData.append(key, obj[key])
			}
			return formData
		}
		
		objToFormData({
			name: "小狗",
			favor: "跑"
		})
