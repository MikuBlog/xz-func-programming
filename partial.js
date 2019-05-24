	// 偏函数基础实现
	function partial(fn) {
		// 保存传进来的所有参数
		var args = [].slice.call(arguments, 1)
		return function() {
			// 连接剩余参数
			var newArgs = args.concat([].slice.call(arguments))
			// 调用相关函数
			return fn.apply(this, newArgs)
		}
	}