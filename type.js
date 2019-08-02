	function type(val) {
		return Object
				.prototype
				.toString
				.call(val)
				.split(' ')[1]
				.split(']')[0]
				.toLowerCase()
	}
	
	[
		"Number",
		"Boolean",
		"String",
		"Object",
		"Null",
		"Undefined",
		"Symbol",
		"Array"
	].forEach(value => {
		type[`is${value}`] = (val) => {
			return type(val) === value.toLowerCase()
		}
	})
	
	type.isObject({}) // true
	type.isNumber(1) // true 