	// 模拟实现apply
	Function.prototype.myApply = function(context, arr) {
		// 判断传入的对象是否为空, 如果为空,则使用全局对象
		var context = context || window
		// 存放参数
		var args = []
		// 将函数的引用赋给传入对象的属性
		context.fn = this
 		// 将传入数组的所有参数放进
		for(var i = 0, len = arr.length; i < len; i ++) {
			args.push(arr[i])
		}
		// 传入参数执行函数并返回结果
		var result = eval('context.fn(' + arr + ')')
		// 删除函数属性
		delete context.fn
		// 返回函数结果
		return result
	}
