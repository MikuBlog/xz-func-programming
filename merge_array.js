	// 合并数组,并去除重复部分
	function merge_array(arr_1, arr_2) {
		// 创建两个set,去重。
		const set_1 = new Set(arr_1), set_2 = new Set(arr_2)
		// 将数组1中含有数组2的部分过滤掉，同理数组2
		return [...arr_1.filter(n => !set_2.has(n)), ......arr_2.filter(n => !set_2.has(n))]
	}
	
	merge_array([1, 2, 2], [1, 3, 1]) // [2, 2, 3]
