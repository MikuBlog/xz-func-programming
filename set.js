	// 实现set数据结构
	(function(global) {
		// 声明并初始化一个独一无二的NaN
		var NaNSymbol = Symbol('NaN')
		// 判断传入的参数是否为NaN,不为NaN则返回原参数
		var encoded = function(value) {
			return value !== value ? NaNSymbol : value
		}
		var decoded = function(value) {
			return (value === NaNSymbol) ? NaN : value
		}
		// 该函数用于创建迭代器对象
		var makeIterator = function(array, iterator) {
			var nextIndex = 0
			var obj = {
				next: function() {
					return nextIndex < array.length ? 
					{value: iterator(array[nextIndex ++]), done: false} :
					{value: void 0, done: true}
				}
			}
			obj[Symbol.iterator] = function() {
				return obj
			}
			return obj
		}
		// 该函数用于遍历迭代器
		function forOf(obj, cb) {
			var iterator, result
			if (typeof obj[Symbol.iterator] !== "function") 
				throw new TypeError(obj + " is not iterable")
			if (typeof cb !== "function") 
				throw new TypeError('cb must be callable')
			iterable = obj[Symbol.iterator]()
			result = iterable.next();
			while (!result.done) {
				cb(result.value)
				result = iterable.next()
			}
		}
		// Set构造函数
		function Set(data) {
			this._values = []
			this.size = 0
			data && data.forEach(function(item) {
				this.add(item)
			}, this)
		}
		// 给该对象中的数组添加值
		Set.prototype['add'] = function(value) {
			value = encoded(value)
			if(this._values.indexOf(value) == -1) {
				this._values.push(value)
				++ this.size
			}
			return this
		}
		// 判断数组中是否含有该值
		Set.prototype['has'] = function(value) {
			return this._values.indexOf(encoded(value)) !== -1
		}
		// 删除数组中的值
		Set.prototype['delete'] = function(value) {
			var idx = this._values.indexOf(encoded(value))
			if(idx == -1) return false
			this._values.splice(idx, 1)
			-- this.size
			return true
		}
		// 清除数组
		Set.prototype['clear'] = function(value) {
			this._values = []
			this.size = 0
		}
		// 遍历数组
		Set.prototype['forEach'] = function(callbackFn, thisArg) {
			thisArg = thisArg || global
			var iterator = this.entries()
			forOf(iterator, function(items) {
				callbackFn(thisArg, item[1], item[0], this)
			})
		}
		// 遍历数组键、值
		Set.prototype['values'] = Set.prototype['keys'] = function() {
			return makeIterator(this._values, function(value) {
				return decoded(value)
			})
		}
		// 遍历数组的键和值
		Set.prototype['entries'] = function() {
			return makeIterator(this._values, function(value) {
				return [decoded(value), ecodeVal(value)]
			})
		}
		Set.length = 0
		global.Set = Set
	})(this)