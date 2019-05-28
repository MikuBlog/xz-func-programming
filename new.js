	// 模拟实现new
	function objectFactory() {
		// 创建一个空对象
		var obj = Object.create(Object.prototype)
		// 将传入的第一个参数赋值给该变量(第一个参数为构造函数),shift方法会改变数组,数组的第一个值弹出
		var Constructor = [].shift.call(arguments)
		// 将构造函数的原型赋值给对象的原型
		obj.__proto__ = Constructor.prototype
		// 传入剩余的参数，将构造函数上的属性绑定到该对象上.如果构造函数有返回值,则将值交给ret变量
		var ret = Constructor.apply(obj, arguments)
		// 如果返回的值不是对象,则按原值返回
		return typeof ret === 'object' ? ret : obj
	} 
