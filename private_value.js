	// 使用weakMap创建私有变量
	const Example_1 = (function() {
		var _private = new WeakMap()
		class Example_1 {
			constructor(params) {
			    _private.set(this, params)
			}
			getName() {
				return _private.get(this)
			}
		}
		return Example_1
	})()
	
	// 使用Symbol实现私有变量
	const Example_2 = (function() {
		let _private = Symbol('private')
		class Example_2 {
			constructor(params) {
			    this[_private] = params || 'private'
			}
			getPrivate() {
				return this[_private]
			}
		}
		return Example_2
	})()