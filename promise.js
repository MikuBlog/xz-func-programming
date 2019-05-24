	// 实现Promise构造函数
	function Promise(executor) {
		const self = this
		// 初始状态为准备(就绪)状态
		self.status = 'pending'
		// 初始值为空
		self.value = undefined
		// 订阅事件数组
		self.onResolvedCallBacks = []
		self.onRejectedCallBacks = []
		// Promise的resolve,旨在将Promise实例的状态转化为fulfilled,并且发布所有订阅的完成事件
		function resolve(value) {
			if(value instanceof Promise) {
				return value.then(resolve, reject)
			}
			// 如果状态为'pending'(就绪)状态,改为fulfilled(完成)状态
			if(self.status === "pending") {
				self.status = 'fulfilled'
				self.value = value
				// 发布所有已经订阅的完成事件
				self.onResolvedCallBacks.forEach(item => item(self.value))
			}
			return self
		}
		// Promise的reject,旨在将Promise实例的状态转化为rejected,并且发布所有订阅的拒绝事件
		function reject(reason) {
			if(self.status === 'pending') {
				self.status = 'rejected'
				self.value = reason
				// 发布所有已经订阅的拒绝事件
				self.onRejectedCallBacks.forEach(item => item(self.value))
			}
		}
		// 立刻执行函数
		try {
			executor(resolve, reject)
		}catch(e) {
			reject(e)
		}
	}
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
		// 当没有函数传进来的时候,添加默认函数
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled: function(value) {
			return value
		},
		onRejected = typeof onRejected === 'function' ? onRejected: function(err) {
			throw err
		},
		// 将this上下文保存起来
		const self = this
		let promise
		if(self.status === 'fulfilled') {
			// 当状态为fulfilled时执行传过来的第一个函数
			promise = new Promise((resolve, reject) => {
				setTimeout(function() {
					try {
						onFulfilled(self.value)
					}catch(e) {
						reject(e)
					}
				})
			})
		}
		if(self.status === 'rejected') {
			// 当状态为rejected时,执行传过来的第二个函数
			promise = new Promise((resolve, reject) => {
				setTimeout(function() {
					try {
						onRejected(self.value)
					}catch(e) {
						reject(e)
					}
				})
			})
		}
		if(self.status === 'pending') {
			// 当状态为pending时,将函数订阅
			promise = new Promise((resolve, reject) => {
				self.onResolvedCallBacks.push(function() {
					try {
						onFulfilled(self.value)
					}catch(e) {
						reject(e)
					}
				})
				self.onResolvedCallBacks.push(function() {
					try {
						onFulfilled(self.value)
					}catch(e) {
						reject(e)
					}
				})
			})
		}
		return promise
	}
	
	// 传入第二个参数(实际上就是调用then方法)
	Promise.prototype.catch = function(onRejected) {
		return this.then(null, onRejected)
	}
	
	Promise.all = function(promises) {
		return new Promise((resolve, reject) => {
			// 保存成功执行的次数
			let count = 0
			// 保存成功执行后返回的参数
			let result = []
			for(let i = 0; i < promises.length; i ++) {
				promises[i].then((data) => {
					result[i] = data
					// 如果都成功执行,将所有参数往then传
					if(++ count === promises.length) {
						resolve(result)
					}
				}, (err) => {
					reject(err)
				})
			}
		})
	}
	
	Promise.race = function(promises) {
		return new Promise((resolve, reject) => {
			// 如果有一个已经完成的话,就立刻执行resolve,将外层Promise状态进行转换
			for(let i = 0; i < promises.length; i ++) {
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