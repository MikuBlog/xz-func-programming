// 大数乘法
function multiply(num1, num2) {
	if (num1 === '0' || num2 === '0') return '0'
	if (isNaN(num1) || isNaN(num2)) {
		throw TypeError()
	}
	let numLen_1 = num1.length
	let numLen_2 = num2.length
	let resultArr = Array(numLen_1 * numLen_2 + 1).fill(0)
	for (let i = numLen_1 - 1, iTimes = 1; i >= 0; i--, iTimes++) {
		for (let j = numLen_2 - 1, jTimes = 1; j >= 0; j--, jTimes++) {
			let
				forTimes = iTimes + jTimes - 1,
				num = ~~num1[i] * ~~num2[j]
			if (num / 10 >= 1) {
				resultArr[forTimes] += ~~(num / 10)
				resultArr[forTimes - 1] += num % 10
			} else {
				resultArr[forTimes - 1] += num % 10
			}
			if (resultArr[forTimes - 1] >= 10) {
				resultArr[forTimes] += ~~(resultArr[forTimes - 1] / 10)
				resultArr[forTimes - 1] = resultArr[forTimes - 1] % 10
			}
		}
	}
	return resultArr.reverse().join("").replace(/^0+/g, '')
};
