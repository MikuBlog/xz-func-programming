// 模拟实现call
Function.prototype.myCall = function() {
	let
		context = arguments[0] || window,
		args = Array.from(arguments).slice(1),
		fn = this
	context.fn = fn
	let result = context.fn(...args)
	delete context.fn
	return result
}
