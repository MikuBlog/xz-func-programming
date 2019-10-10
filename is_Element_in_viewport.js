	// 判断元素是否在视窗内
	function isElementInViewPort(el) {
		const 
			reat = el.getBoundingClientRect(),
			elTop = reat.top,
			elLeft = reat.left,
			elBottom = reat.bottom,
			elRight = reat.right,
			viewWidth = window.innerWidth || document.documentElement.clientWidth,
			viewHeight = window.innerHeight || document.documentElement.clientHeight,
			elWidth = el.offsetWidth,
			elHeight = el.offsetHeight
			
		return (
			elTop >= 0 &&
			elLeft >= 0 &&
			elBottom < viewHeight + elHeight &&
			elRight < viewWidth + elWidth
		)
	}