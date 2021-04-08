// 模拟实现new
	function objectFactory() {
		let
			obj = Object.create(constructor.prototype || Object.prototype),
			res = constructor.apply(obj, Array.from(arguments).slice(1))
		return typeof res === 'object' ? res : obj
	}
