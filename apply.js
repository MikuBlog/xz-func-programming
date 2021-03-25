// 模拟实现apply
Function.prototype.myApply = function() {
	let
		context = arguments[0] || window,
		args = Array.from(arguments[1] || []),
		fn = this
	context.fn = fn
	let result = context.fn(...args)
	delete context.fn
	return result
}
