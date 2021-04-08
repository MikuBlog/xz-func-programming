/**
 * 注意点：
 * 1. 避免循环引用（即赋值过的对象如果又出现在属性中，则无需再进行遍历赋值）
 * 2. 对于Date、Regexp、Set、WeakSet、Map、WeakMap之间new即可
 * 3. 保持赋值对象的原型属性
 * 4. for in会遍历原型链上的属性，为了避免这种情况，需用hasOwnProperty判断
 * JSON.stringify()深拷贝的弊端
 * 1. 忽略undefined与函数
 * 2. regexp、error、map、set、weakmap、weakset会全部转为普通对象且没有任何值
 * 3. Date会转为字符串日期
 * 4. infinity、-infinity、NaN转为null
 * 5. constructor消失
 * 6. 无法处理循环引用（报错）
 */
function deepCopy(source, store = new WeakMap()) {
	if (store.has(source)) return store.get(source)
	let types = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error]
	if (types.includes(source.constructor)) {
		return new source.constructor(source)
	}
	let target = Array.isArray(source) ? [] : Object.create(Object.getPrototypeOf(source))
	store.set(source, target)
	for (let key in source) {
		if (source.hasOwnProperty(key)) {
			if (typeof source[key] === 'object' && source[key] !== null) {
				target[key] = deepCopy(source[key], store)
			} else {
				target[key] = source[key]
			}
		}
	}
	return target
}
