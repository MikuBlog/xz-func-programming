/**
 * 红绿灯
 */
function light(color, wait) {
	return new Promise((resolve, reject) => {
		console.log(`${color}灯亮了!`)
		setTimeout(_ => {
			resolve()
		}, wait)
	})
}
async function handler() {
	await light('红', 1000)
	await light('绿', 1000)
	await light('黄', 1000)
}
