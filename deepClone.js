/**
 * 对象深拷贝
 思路：
 1. 对于Date、Regexp、Set、Map、WeakSet、WeakMap对象通过构造函数重新创建即可，对于数组则需要额外添加一个length值，对于对象则普通赋值与递归深拷贝
 2. 保持深拷贝对象的原型值，这里使用到Object.create
 3. 使用hash来保存每次遍历的对象，避免因为多次遍历同一个对象导致循环引用问题的出现
 */
function deepClone(obj, hash = new WeakMap()) {
	// 解决循环引用，避免因为循环运用而不断递归
	if (hash.has(obj)) return hash.get(obj)
	let type = [Date, RegExp, Set, Map, WeakSet, WeakMap]
	if (type.includes(obj.constructor)) {
		return new obj.constructor(obj)
	}
	// 保存对象的原型值
	let newObj = Object.create(Object.getPrototypeOf(obj))
	// 保存遍历过的对象，在下次拷贝的时候用来避免循环引用
	hash.set(obj, newObj)
	// 遍历与递归完成对象所有属性的深拷贝
	for (let key in obj) {
		if (Array.isArray(obj[key])) {
			let arr = deepClone(obj[key], hash)
			arr.length = Object.keys(arr).length
			newObj[key] = arr
		} else if (typeof obj[key] === 'object') {
			newObj[key] = deepClone(obj[key], hash)
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj
}
