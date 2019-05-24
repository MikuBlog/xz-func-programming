	// 模拟实现call
	Function.prototype.myCall = function(context) {
		// 判断传入的对象是否为空, 如果为空,则使用全局对象
		var context = context || window
		// 存放参数
		var args = []
		// 将函数的引用赋给传入对象的属性
		context.fn = this
		// 将第二个参数后的所有参数存放到args中
		for(var i = 1, len = arguments.length; i < len; i ++) {
			args.push(arguments[i])
		}
		// 执行并返回该函数的结果
		var result = eval('context.fn('+ args +')')
		// 删除函数中的属性
		delete context.fn
		// 返回函数结果
		return result
	}