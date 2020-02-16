function timeDiff(time_1, time_2) {
	let time = ""
	time = time_1 < time_2 ?
		(new Date(time_2) - new Date(time_1)) :
		(new Date(time_1) - new Date(time_2))
	let hour = Math.floor(time / 1000 / 60 / 60)
	let min = Math.floor((time % (60 * 60 * 1000)) / 1000 / 60)
	let ses = Math.floor(((time % (60 * 60 * 1000)) % (60 * 1000)) / 1000)
	return `${hour < 10
		? `0${hour}`
		: hour}:${min < 10
		? `0${min}`
		: min}:${ses < 10
		? `0${ses}`
		: ses}`
}