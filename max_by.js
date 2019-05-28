	// 求数组对象中的最大值
	function maxBy(arr, fn) {
		return Math.max(...arr.map(typeof fn === 'function' ? fn: v => v[fn]))
	}
	
	maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
	maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8 
