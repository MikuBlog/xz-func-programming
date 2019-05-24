	// async简单实现
	function spawn(genF) {
		return new Promise((resolve, reject) => {
			// 创建迭代器对象
			const gen = genF()
			function step(nextF) {
				let next
				try {
					// 调用迭代器函数,并且获取迭代器返回的值
					next = nextF()
				}catch(e) {
					return reject(e)
				}
				// 如果迭代器已经遍历完毕
				if(next.done) {
					// 返回标错信息
					return reject(next.value)
				}
				// 如果迭代器还没有遍历完,继续遍历迭代器
				Promise.resolve(next.value).then((value) => {
					step(() => {
						return gen.next(value)
					})
				}, (e) => {
					step(() => {
						return gen.throw(e)
					})
				})
			}
			// 调用函数
			step(() =>return gen.next(undefined))
		})
	}