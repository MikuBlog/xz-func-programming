/**
 * rgb转hex
 */
function rgbToHex(rgb) {
	return `#${rgb.replace(/^rgb\(|\s+|\)$/g, '').split(",").map(val => val.length === 1
			? `0${val}`
			: Number(val).toString(16)).join("")}`
}
