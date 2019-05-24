	// 函数记忆
	function memoize(f) {
		// 用一个对象缓存变量
		var cache = {}
		return function() {
			// 将传入的参数作为唯一键
			var key = arguments.length + JSON.stringify(Array.prototype.slice.call(arguments))
			// 如果缓存中存在该键,直接返回
			if(key in cache) {
				return cache[key]
			// 否则重新计算返回该值,存入缓存当中
			}else {
				return cache[key] = f.apply(this, arguments) 
			}
		}
	}