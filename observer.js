/**
 * 数据拦截
 * 
 * 思路：通过闭包的形式访问变量，避免了循环get问题
 */
class Observer {
	constructor(data) {
		this.oberserver(data)
	}
	oberserver(data) {
		if (data && typeof data === 'object') {
			for (let key in data) {
				this.defineReactive(data, key, data[key])
			}
		}
	}
	defineReactive(obj, key, value) {
		Object.defineProperty(obj, key, {
			get() {
				return value
			},
			set(newVal) {
				value = newVal
			}
		})
	}
}
