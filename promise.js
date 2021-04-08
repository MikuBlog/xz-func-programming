/**
 * Promise封装
 * 1. promise的三种状态：pending（就绪）、fulfilled（完成）、rejected（失败）
 * 2. 当调用promise的resolve方法时，pending -> fulfilled，调用完成队列中的所有方法，当调用reject方法时，pending -> rejected，调用失败队列中的所有方法
 * 3. 当promise处于pending状态时，每次调用promise实例的then方法时，都会将成功回调和失败回调添加到方法里面
 * 4. 当promise处于fulfilled或rejected状态的时候，调用then方法则直接调用而无需加入队列
 * 5. 调用then后返回一个新的promise实例
 * 6. 为了保证then的返回值生效，则进行如下处理
 * 		5.1 如果返回值是原始值，则直接resolve
 * 		5.2 如果返回值是promise，则将该promise的resolve与reject替换为上一个的promise
 */
function Promise(executor) {
	let self = this
	self.status = 'pending'
	self.value = null // resolve的值
	self.reason = null // reject的值
	self.onFulfilled = [] // 成功回调
	self.onRejected = [] // 失败回调
	function resolve(value) {
		if(self.status === 'pending') {
			self.status = 'fulfilled'
			self.value = value
			self.onFulfilled.forEach(fn => fn())
		}
	}

	function reject(reason) {
		if(self.status === 'pending') {
			self.status = 'rejected'
			self.reason = reason
			self.onRejected.forEach(fn => fn())
		}
	}
	try {
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}
Promise.prototype.then = function(onFulfilled, onRejected) {
	// 将传入的参数转换一下，如果是方法直接使用，否则使用默认方法
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
	onRejected = typeof onRejected === 'function' ? onRejected : reason => {
		throw reason
	}
	let promise = new Promise((resolve, reject) => {
		if (self.status === 'fulfilled') {
			setTimeout(_ => {
				try {
					let result = onFulfilled(self.value)
					resolvePromise(promise, result, resolve, reject)
				} catch (e) {
					reject(e)
				}
			})
		} else if (self.status === 'rejected') {
			setTimeout(_ => {
				try {
					let result = onRejected(self.reason)
					resolvePromise(promise, result, resolve, reject)
				} catch (e) {
					reject(e)
				}
			})
		} else if (self.status === 'pending') {
			self.onFulfilled.push(() => {
				setTimeout(_ => {
					try {
						let result = onFulfilled(self.value)
						resolvePromise(promise, result, resolve, reject)
					} catch (e) {
						reject(e)
					}
				})
			})
			self.onRejected.push(() => {
				setTimeout(_ => {
					try {
						let result = onRejected(self.reason)
						resolvePromise(promise, result, resolve, reject)
					} catch (e) {
						reject(e)
					}
				})
			})
		}
	})
	return promise
}

function resolvePromise(promise, result, resolve, reject) {
	if (promise === result) {
		throw new TypeError("Chaining cycle detected for promise #<Promise> at <anonymous>")
	}
	if (result instanceof Promise) {
		try {
			result.then(resolve, reject)
		} catch (e) {
			reject(e)
		}
	} else {
		resolve(result)
	}
}
Promise.prototype.catch = function(onRejected) {
	return this.then(null, onRejected)
}
/**
 * 1. finally一定会执行
 * 2. 且仅会将上一个promise的值传递到下一个promise去，自身只作为promise中间层使用
 */
Promise.prototype.finally = function(callback) {
	return this.then(value => {
		return Promise.resolve(callback()).then(() => value)
	}, err => {
		return Promise.resolve(callback()).then(() => {
			throw err
		})
	})
}
Promise.resolve = function(value) {
	return new Promise((resolve, reject) => {
		if (value instanceof Promise) {
			value.then(resolve, reject)
		} else {
			resolve(value)
		}
	})
}
Promise.reject = function(reason) {
	return new Promise((resolve, reject) => {
		reject(reason)
	})
}
Promise.all = function() {
	let
		promises = Array.from(arguments),
		times = 0,
		result = []
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			promises[i].then(res => {
				result.push(res)
				if (++times === promises.length) {
					resolve(result)
				}
			}, reject)
		}
	})
}
Promise.race = function() {
	let promises = Array.from(arguments)
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			promise[i].then(resolve, reject)
		}
	})
}
