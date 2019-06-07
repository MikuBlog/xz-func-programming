	  // 同过迭代器属性判断传入的对象是否为类数组
    function isArrayLike(obj) {
			  return obj !== null && typeof obj[Symbol.iterator] === 'function'
	  }
		
	  isArrayLike([1, 2, 3])// true
	  isArrayLike(document.querySelectorAll("img"))// true
