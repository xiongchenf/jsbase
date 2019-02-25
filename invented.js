const mVue = (function() {
	return function(o) {
		let _dom = null;
		if (!o) return {};
		if (typeof o === 'string') o = JSON.parse(o);
		if (o.id) {
			_dom = document.getElementById(o.id);
		}
		if(o.data) {
			initData(o.data);
		}
	}

	function initData(o) {
		let a = 10,
		b = 20;
		let c = a * b;
		for(let k in o) {
			
		}
	}
})();