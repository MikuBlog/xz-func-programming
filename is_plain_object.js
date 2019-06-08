	// 判断对象是否直接继承于Object
	function isPlainObject(obj) {
		return !!obj && typeof obj === "object" && obj.constructor === Object
	}
	
	isPlainObject({name: "旋仔"})// true
	isPlainObject(new Object())// true
	isPlainObject(Object.create(null))// false
	isPlainObject(new Boolean())// false