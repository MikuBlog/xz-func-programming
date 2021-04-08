/**
 * 任务队列
 */
class Quene {
	constructor() {
		this.queue = []
	}
	async start() {
		for (let i = 0; i < this.queue.length; i++) {
			await this.queue[i]()
		}
	}
	task(wait, cb) {
		this.queue.push(() => {
			return new Promise((resolve, reject) => {
				setTimeout(_ => {
					cb()
					resolve()
				}, wait)
			})
		})
		return this
	}
}
new Quene()
	.task(100, () => {
		console.log(1);
	})
	.task(2000, () => {
		console.log(2);
	})
	.task(1000, () => {
		console.log(3);
	})
	.start();
