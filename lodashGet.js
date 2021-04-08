/**
 * lodash的get方法
 * 
 * 当访问obj属性越界的时候返回默认值
 * 满足情况"a[0].b.c.d[e]"
 */
function lodashGet(obj, path, defaultValue = undefined) {
	path = path.replace(/\[(\d+|[a-zA-Z]+)\]/g, (str, p) => `.${p}`).split(".").filter(val => val)
	let result = obj
	for (let i = 0; i < path.length; i++) {
		if (result[path[i]] == null) {
			return defaultValue
		} else {
			result = result[path[i]]
		}
	}
	return result
}
