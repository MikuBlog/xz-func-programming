	// 多函数合并(从后往前执行合并后的函数)
	function compose() {
		var args = arguments
		var start = args.length - 1
		return function() {
			// 先调用一次函数返回结果
			var result = args[start].apply(this, arguments)
			// 将结果作为下一个函数的参数
			while(start--) result = args[start].call(this, result)
			// 返回最终结果
			return result
		}
	} 
