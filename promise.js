function Promise(fn) {
	let self = this
	this.status = 'pending'
	this.value = undefined
	this.reason = undefined
	this.onResolvedCallbacks = []
	this.onRejectedCallbacks = []

	function resolve(value) {
		setTimeout(_ => {
			if (value instanceof Promise) {
				return value.then(resolve, reject)
			}
			if (self.status === 'pending') {
				self.status = 'fulfilled'
				self.value = value
				self.onResolvedCallbacks.forEach(val => val())
			}
		})
	}

	function reject(reason) {
		setTimeout(_ => {
			if (self.status === 'pending') {
				self.status = 'rejected'
				self.reason = reason
				self.onRejectedCallbacks.forEach(val => val())
			}
		})
	}
	try {
		fn(resolve, reject)
	} catch (e) {
		reject(e)
	}
}
// Promise中转站
function centorPromise(promise, val, resolve, reject) {
	if (promise.status !== 'rejected') {
		try {
			if (val instanceof Promise) {
				val.then(resolve, reject)
			} else {
				resolve(val)
			}
		} catch (e) {
			reject(e)
		}
	} else {
		reject(promise.reason)
	}
}
// Promise.then实现
Promise.prototype.then = function(onFulfilledFn, onRejectedFn) {
	let
		self = this,
		promise = null
	onFulfilledFn = onFulfilledFn && typeof onFulfilledFn === 'function' ?
		onFulfilledFn :
		val => {
			return val
		}
	onRejectedFn = onRejectedFn && typeof onRejectedFn === 'function' ?
		onRejectedFn :
		val => {
			return val
		}
	return promise = new Promise((resolve, reject) => {
		if (self.status === 'pending') {
			self.onResolvedCallbacks.push(() => {
				try {
					let result = onFulfilledFn(self.value)
					centorPromise(self, result, resolve, reject)
				} catch (e) {
					self.reason = e
					reject(e)
				}
			})
			self.onRejectedCallbacks.push(() => {
				try {
					let result = onRejectedFn(self.reason)
					centorPromise(self, result, resolve, reject)
				} catch (e) {
					self.reason = e
					reject(e)
				}
			})
		}
		if (self.status === 'fulfilled') {
			try {
				let result = onFulfilledFn(self.value)
				centorPromise(self, result, resolve, reject)
			} catch (e) {
				self.reason = e
				reject(e)
			}
		}
		if (self.status === 'rejected') {
			try {
				let result = onRejectedFn(self.reason)
				centorPromise(self, result, resolve, reject)
			} catch (e) {
				self.reason = e
				reject(e)
			}
		}
	})
	return promise
}
Promise.catch = function(onRejected) {
	return this.then(null, onRejected)
}
Promise.all = function(promises) {
	return new Promise((resolve, reject) => {
		let
			count = 0,
			result = []
		for (let i = 0, len = promises.length; i < len; i++) {
			promises[i].then(result => {
				result.push(result)
				if (++count === promises.length) {
					resolve(result)
				}
			}).catch(e => {
				reject(e)
			})
		}
	})
}
// 只要有一个promise状态改变了就立刻resolve或reject对应的那个promise
Promise.race = function(promises) {
	return new Promise((resolve, reject) => {
		for (let i = 0, len = promises.length; i < len; i++) {
			promises[i].then(resolve, reject)
		}
	})
}
Promise.resolve = function(value) {
	return new Promise((resolve, reject) => {
		resolve(value)
	})
}
Promise.reject = function(reason) {
	return new Promise((resolve, reject) => {
		reject(reason)
	})
}
