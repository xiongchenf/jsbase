;(function() {
	function Graph() {
		let vartices= [];
		let dic = new Dictionary();
	}
	this.addVertex = val => {
		vartices.push(val);
		dic.set(val, []);
	}

	this.addEdge = (v, w) => {
		dic.get(v).push(w);
		dic.get(w).push(v);
	}
})();