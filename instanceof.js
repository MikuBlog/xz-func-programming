	// 简单模拟实现intanceof
	function myInstanceof_1(L, R) {
		let leftSize = Object.getPrototypeOf(L),
			rightSize = R.prototype
		while(leftSize) {
			if(leftSize === rightSize) 
				return true
			leftSize = Object.getPrototypeOf(leftSize)
		}
		return false
	}
	
	function myInstanceof_2(L, R) {
		let leftSize = L.__proto__,
			rightSize = R.prototype
		while(leftSize) {
			if(leftSize === rightSize) 
				return true
			leftSize = leftSize.__proto__
		}
		return false
	}
	
	function Animal() {}
	const dog = new Animal()
	
	myInstanceof_1(dog, Animal)// true
	myInstanceof_1(dog, Object)// true
	myInstanceof_1(dog, Array)// false