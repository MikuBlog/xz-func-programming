	// 获取昨天
	function yesterday() {
		let t = new Date();
		t.setDate(t.getDate() - 1);
		return t.toISOString().split('T')[0];
	}
	// 获取今天
	function today() {
		return new Date().toISOString().split('T')[0];
	}
	// 获取明天
	function tomorrow() {
	  let t = new Date();
	  t.setDate(t.getDate() + 1);
	  return t.toISOString().split('T')[0];
	};
	
	yesterday()// 2019-05-31
	today()// 2019-06-01
	tomorrow()// 2019-06-02