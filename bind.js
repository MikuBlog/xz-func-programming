	// 模拟实现bind
	Function.prototype.myBind = function(context) {
		// 判断绑定的是否为函数
		if(typeof this !== "function") {
			throw new Error("请绑定在函数上！");
		}
		// 存放函数的引用
		var self = this
		// 将在绑定时传进来的第二个参数及其以后的参数存放起来
		var args = Array.prototype.slice.call(arguments, 1)
		var foo =  function() {
			// 将第二次调用时的参数存放起来
			var allArgs = Array.prototype.slice.call(arguments)
			/**
			 * 判断是否为new操作实现构造对象,如果是,则this指向该实例,否则则为绑定的对象.
			 * 将第一次绑定时传入的有效参数与第二次传入的参数连接起来,并调用函数
			 */ 
			return self.apply(this instanceof t ? this : context, args.concat(allArgs))
		}
		// 借助中介,避免修改foo函数原型属性的同时修改绑定函数的原型
		function t() {}
		t.prototype = this.prototype
		foo.prototype = new t()
		// 返回绑定后的函数
		return foo
	}