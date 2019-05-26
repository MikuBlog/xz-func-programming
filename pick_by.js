	// 选取对象中的属性
	function pickBy(obj, fn) {
		return Object.keys(obj)
			.filter(k => fn(obj[k]))
			.reduce((prev, key) => (prev[key] = obj[key], prev), {})
	}
	
	pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number') // {a: 1, c: 3}