 	// 防抖函数
	function unShake(callback, time, immediate = true) {
		// 保存定时器引用
		var clock
		// 保存函数返回的结果
		var result
		return function() {
			// 保存this指向
			var context = this
			// 如果定时器存在,就清除定时器引用
			clock && clearTimeout(clock)
			// 如果参数为true, 则为即执行函数
			if(immediate) {
				// 如果定时器引用不存在,则立刻调用函数;如果定时器存在,则不调用函数
				var isCall = !clock
				// 给定时器添加引用
				clock = setTimeout(() => {
					// time秒后去除定时器引用
					clock = null
				}, time)
				isCall && (result = callback.apply(context, arguments))
			}else {
				// time秒后执行函数
				clock = setTimeout(() => {
					callback.apply(context, arguments)	
				}, time)
			}
			// 返回函数结果(一般用于即执行函数)
			return result
		}
	}