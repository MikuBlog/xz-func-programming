// 大数加法
function add(num_1, num_2) {
	if (isNaN(num_1) || isNaN(num_2)) {
		throw TypeError()
	}
	let len = Math.max(num_1.length, num_2.length)
	let resultArr = Array(len + 1).fill(0)
	num_1 = num_1.padStart(len, '0')
	num_2 = num_2.padStart(len, '0')
	for (let i = len - 1, j = 0; i >= 0; i--, j++) {
		let num = ~~num_1[i] + ~~num_2[i]
		if (num / 10 >= 1) {
			resultArr[j + 1] += 1
			resultArr[j] += num % 10
		} else {
			resultArr[j] += num
		}
	}
	return resultArr.reverse().join("").replace(/^0+/g, '')
}
