	// 获取图片base64
	function getBase64Image(image) {
		const 
			canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			width = image.width,
			height = image.height
		canvas.width = width
		canvas.height = height
		ctx.drawImage(image, 0, 0, width, height)
		return canvas.toDataURL(`image/${image.src.toLowerCase()}`)
	}