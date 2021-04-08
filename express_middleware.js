/**
 * express中间件实现流程
 * 
 * 思路：将下一个函数的引用作为上一个函数的next即可
 */
function a1(next) {
	console.log("dosth_a1_before");
	next && next();
	console.log("dosth_a1_after");
}

function a2(next) {
	console.log("dosth_a2_before");
	next && next();
	console.log("dosth_a2_after");
}

function a3(next) {
	console.log("dosth_a3_before");
	next && next();
	console.log("dosth_a3_after");
}

function fn(arr) {
	let next = null
	let createNext = (mid, next) => () => mid(next)
	for (let i = arr.length - 1; i >= 0; i--) {
		next = createNext(arr[i], next)
	}
	next()
}
