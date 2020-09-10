// 判断是否为没有键值对的纯对象: {}
function isPureObject(obj) {
	return Object
		.prototype
		.toString
		.call(obj)
		.split(' ')[1]
		.split(']')[0]
		.toLowerCase() === 'object' && !Object.keys(obj).length
}

isPureObject({ name: 'xuanzai' }) // false
isPureObject([]) // false
isPureObject(() => {}) // false
isPureObject({}) // true
