	// 判断是否为素数
	function isPrime(num) {
		const boundary = Math.floor(Math.sqrt(num))
		for(let i = 2; i <= boundary; i ++)
			if(num % i === 0)
				return false
		return num >= 2
	}
	
	isPrime(4)// false
	isPrime(5)// true