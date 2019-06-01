	// 图片懒加载
	const lazyLoad = (function() {
		// 保存所有图片元素
		let imgList = [...document.querySelectorAll('img')], 
			len = imgList.length, 
			count = 0 // 保存图片的加载次数
		return function() {
			// 保存已加载图片的索引
			let deleteIndexList = []
			imgList.forEach((img, index) => {
				// 如果图片已经进入了视窗当中，那么加载图片地址，图片加载次数+1，保留图片索引
				img.getBoundingClientRect().top <= window.innerHeight && (img.src = img.dataset.src, deleteIndexList.push(index), count ++)
			})
			// 如果加载次数等于图片的总数，那么去除滚动事件监听器
			if(count === len) {
				document.removeEventListener('scroll', lazyLoad)
			}
			// 去除已经加载的图片元素
			imgList = imgList.filter((val, index) => !deleteIndexList.includes(index))
		}
	})()