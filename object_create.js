// 模拟object.create
function myObjectCreate(obj, properties) {
	let newObj = {}
	newObj.__proto__ = obj || null
	if (properties) {
		if(typeof properties !== 'object') throw new TypeError('should be object')
		Object.defineProperties(newObj, properties)
	}
	return newObj
}
