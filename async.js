// async简单实现
function spawn(genF) {
	return new Promise((resolve, reject) => {
		let gen = genF()

		function step(nextF) {
			let next
			try {
				next = nextF()
			} catch (e) {
				return reject(e)
			}
			if (next.done) {
				return resolve(next.value)
			}
			Promise.resolve(next.value).then(val => {
				step(() => gen.next(val))
			}, err => {
				step(() => gen.throw(e))
			})
		}
		step(() => gen.next(undefined))
	})
}
