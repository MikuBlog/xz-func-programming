function typeOf(data) {
	return Object.prototype.toString.call(data).replace(/^\[object\s+([a-zA-Z]+)\]$/, (str, p) => {
		return p.toLowerCase()
	})
}
