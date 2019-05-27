	// 通过html创建一个DOM元素
	function createElement(str) {
		const el = document.createElement('div')
		el.innerHTML = str
		return el.firstElementChild
	}
	
	const el = createElement(
		`<div class="container">
			<p>Hello World!</p>
		</div>`
	)