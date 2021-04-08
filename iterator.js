/**
 * 实现迭代器
 * 
 * 实现对象迭代器后，对象可以使用for of进行遍历，遍历出来的值为对象属性值
 */
obj[Symbol.iterator] = function() {
	let
		keys = Object.keys(this),
		len = keys.length,
		self = this,
		ind = 0
	return {
		next() {
			if(ind < len) {
				return {
					value: self[keys[ind ++]],
					done: false
				}
			} else {
				return {
					value: undefined,
					done: true
				}
			}
		}
	}
}
