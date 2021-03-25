// 模拟实现bind
Function.prototype.myBind = function() {
	if (typeof this !== "function") {
		throw new Error("请绑定在函数上！");
	}
	let
		context = arguments[0] || window,
		args = Array.from(arguments).slice(1),
		fn = this

	function f() {}
	f.prototype = fn.prototype
	let foo = function() {
		let newArgs = args.concat(Array.from(arguments))
		return fn.apply(this instanceof f ? this : context, args)
	}
	foo.prototype = new f()
	return foo
}
