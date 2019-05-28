	// 节流函数
	function throttle(callback, wait) {
		var timeout, context, args, result, previous = 0
		// 设置一个函数,用于收尾调用(最后一次调用)
		var later = function() {
			previous = +new Date()
			timeout = null
			callback.apply(context, args)
		}
		// 防抖函数
		var throttled = function() {
			// 设置当前时间
			var now = +new Date()
			// 保存当前时间差
			var remaining = wait - (now - previous)
			context = this
			args = arguments
			/**
			 * 如果时间差小于零,表示已经超过等待时间,可以立刻执行.
			 * 第二种情况就是修改了系统时间
			 * 如果将系统时间改为以前，则使得当前时间小于上一次的时间，出现remaining比wait大的情况
			 * 如果将系统时间改为久远的未来，则使得当前时间远大于上一次的时间，出现remaining为负数的情况
			 */
			if(remaining <= 0 || remaining > wait) {
				// 定时器存在,去除定时器,保存当前时间,立刻执行函数.
				if(timeout) {
					clearTimeout(timeout)
					timeout = null
				}
				previous = now
				callback.apply(context, args)
			}else if(!timeout) {
				// 如果定时器不存在,将延迟函数的执行
				timeout = setTimeout(later, remaining)
			}
		}
		return throttled
	} 
