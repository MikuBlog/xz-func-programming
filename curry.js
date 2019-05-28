	// 函数柯里化实现
	function curry_1(fn, args) {
		// 保存函数参数个数
		var length = fn.length
		// 保存一开始传进来的参数(数组)
		args = args || []
		return function() {
			// 将传进来的参数保存起来
			for(var i = 0, len = arguments.length; i < len; i ++) {
				args.push(arguments[i])
			}
			// 如果换进来的参数还没达到函数参数的个数,返回一个新的函数,否则直接执行函数
			if(length > args.length) {
				return curry.call(this, fn, args)
			}else {
				return fn.apply(this, args)
			}
		}
	}
	
	// 使用ES6语法与bind完成柯里化函数
	function curry_2(fn, arity = fn.length, ...args) {
		return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
	}
	
	const a = curry_2((val_1, val_2, val_3) => val_1 + val_2 + val_3)(1)
	const b = a(2)
	b(3)// 6