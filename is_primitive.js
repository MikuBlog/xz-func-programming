	// 判断传入的参数是不是基本值
	function isPrimitive(val) {
		return Object(val) !== val
	}
	
	isPrimitive(null); // true
	isPrimitive(50); // true
	isPrimitive('Hello!'); // true
	isPrimitive(false); // true
	isPrimitive(Symbol()); // true
	isPrimitive([]); // false