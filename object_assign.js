/**
 * 手写Object.assign（浅拷贝）
 */
function myObjectAssign(source, ...objLists) {
	if (source == null || typeof source !== 'object') throw new TypeError()
	objLists.forEach(obj => {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				source[key] = obj[key]
			}
		}
	})
	return source
}
