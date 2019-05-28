	// Map转array(转换出来的是一个二维数组，二维数组中的元素分别是键与值)
	function tranform_1(m) {
		return [...map]
	}
	
	// Array转Map
	function transform_2(arr) {
		return new Map(arr)
	}
	
	// Map转Object
	function tranform_3(m) {
		let obj = Object.create(null)
		for(let [key, value] of m) {
			obj[key] = value
		}
		return obj
	}
	
	// Object转map
	function tranform_4(obj) {
		let map = new Map()
		for(let key in obj) {
			map.set(key, obj[key])
		}
		return map
	}
	
	// Map转JSON
	function tranform_5(m) {
		return JSON.stringify([...m])
	}
	
	// JSON转Map
	function tranform_6(json) {
		return tranform_4(JSON.parse(json))
	} 
