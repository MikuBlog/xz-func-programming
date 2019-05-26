	// 去除对象中的键值
	function pick(obj, arr) {
		return arr.reduce((acc, key) => (key in obj && (acc[key] = obj[key]), acc), {})
	}
	
	pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }