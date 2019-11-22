	// 获取url后的参数或传入的url后的参数
	function urlQuery(url = "") {
	  let
	    query = {},
	    param = ""
	  if (url.split("?")[1]) {
	    param = url.split("?")[1]
	  } else if (window.location.search) {
	    param = window.location.search.replace("?", "")
	  } else {
	    return query
	  }
	  param.split("&").forEach(val => {
	    const
	      key = val.split("=")[0],
	      value = val.split("=")[1]
	    query[key] = value
	  })
	  return query
	}