;(function() {
	function Dictionary () {
		let items = {};
		// set(key,value):向字典中添加新元素。
		this.set = (key, value) {
			items[key] = value;
		}
		// remove(key):通过使用键值来从字典中移除键值对应的数据值。
		this.remove = key => {
			if(items[key]) {
				delete items[key];
				return true;
			}
			return false;
		}
		// has(key):如果某个键值存在于这个字典中，则返回true，反之则返回false。 // get(key):通过键值查找特定的数值并返回。
		this.has = key => {
			if(items[key]) {
				return true;
			}
			return false;
		}
		// clear():将这个字典中的所有元素全部删除。
		this.clear = () => {
			items = {};
		}
		// size():返回字典所包含元素的数量。与数组的length属性类似。
		this.size = () => {
			let count = 0;
	        for(let key in items) {  
	            if(items.hasOwnProperty(key))  
	                ++count; 
			}
        	return count;
		}
		// keys():将字典所包含的所有键名以数组形式返回。
		this.keys = () => {
			let arr = [];
			for(let key in items) {
				if(items.hasOwnProperty(key)) {
					arr.push(key)
				}
			}
			return arr;
		}
		// values():将字典所包含的所有数值以数组形式返回。
		this.values = () => {
			let values = [];
			for(let key in items) {
				if(this.has(key)) {
					values.push(items[key]);
				}
			}
			return values;
		}
		// get() 返回字典中的指定项
		this.get = key => {
			return this.has(key) ? items[key]: false;
		},

		// set() 向字典中添加项
		this.set = (key, value) => {
			items[key] = value;
		}

		this.getItems = key => {
			return items;
		}
	}
})();