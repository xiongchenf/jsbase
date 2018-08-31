;(function(window) {
	function ValuePair (key, value) {
		this.key = key;
		this.value = value;
		this.toString = () => {
			return '['+ this.key + '=' + this.value +']';
		}
	}
	function HashTable() {
		let table = [];
		this.hashCode = key => {
			for(let i = 0, l = key.length; i < l; i++) {
				hash += key.charCodeAt(i);
			}
			return hash % 47;
		}

		this.put = (key, value) => {
			let pos = this.hashCode(key);
			if(table[pos] === null) {
				table[pos] = new LinkedList();
			}
			// table[pos] = value;
			table[pos].append(new ValuePair(key, value));
		}

		this.get = key => {
			let pos = this.hashCode(key);
			if(table[pos] !== null) {
				let cur = table[post].getHead();
				while(cur) {
					if(cur.el.key === key) {
						return cur.el.value;
					}
					cur = cur.next();
				}
				if(cur.el.key === key) {
					return cur.el.value;
				}
			}
			return null;
		}

		this.remove = key => {
			let pos = this.hashCode(key);
			if (table[pos] !== null) {
				let cur = table[pos].getHead();
				while(cur.next) {
					if(cur.next.el.key === key) {
						table[pos].remove(cur.el);
						if(table[pos].isEmpty()) {
							table[pos] = null;
						}
						cur.next.el.value = null;
						return true;
					}
					cur = cur.next;
				}
				if(cur.el.key === key) {
					cur.remove(cur.el);
					if(table[pos].isEmpty()) {
						table[pos] = null;
					}
					return true;
				}
			}
			return false;
		}
	}
})(window);