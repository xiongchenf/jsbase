;(function(window) {
	function Set() {
		let items = {};
		// 判断是否具有属性
		this.has = el => {
			// return el in items;
			return items.hasOwnProperty(el);
		}
		// 向集合中添加属性
		this.add = el => {
			if (!this.has(el)) {
				items[el] = el;
				return true;
			}
			return false;
		}
		// 从集合中移除值
		this.remove = el => {
			if (this.has(el)) {
				delete item[el];
				return true;
			}
			return false;
		}
		// 清空集合
		this.clear = () => {
			items = {};
		}
		// 集合长度
		this.size = () => {
			let count = 0;
	        for(var key in items) {  
	            if(items.hasOwnProperty(key))  
	                ++count; 
			}
        	return count;
		}
		// 集合的所有属性
		this.values = () => {
			return Object.keys(items);
		}

		this.valuesLegacy = () => {
			let keys = [];
			for(let key in items) {
				keys.push(key);
			}
			return keys;
		}
		// 计算集合并集
		this.union = oSet => {
			if (!oSet || typeof oSet !== Object) return items;
			let newSet = new Set();
			let values = this.values;
			for(let i = 0, l = values.length; i < l; i++) {
				newSet.add(values[i]);
			}
			values = oSet.values(); 
			// 对两个集合的values进行遍历分别add到同一个新的集合里，相同属性会只保留一个
			for(let i = 0, l = values.length; i < l; i++) {
				newSet.add(values[i]);
			}
			return newSet;
		}
		// 计算集合交集
		this.intersection = oSet => {
			if (!oSet || typeof oSet !== Object) return items;
			let inter = new Set(),	
				values = this.values;
			for (let i = 0, l = values.length; i < l; i++) {
				// 遍历当前values如果存在于otherSet对象里，则添加到inter集合里
				if(oSet.has(values[i])) {
					inter.add(oSet[i]);
				}
			}
			return inter;
		}
		// 计算集合差集
		this.difference = oSet => {
			if (!oSet || typeof oSet !== Object) return items;
			let diff = new Set(),
				values = this.values();
			for (let i = 0, l = values.length; i < l; i++) {
				if (!oSet.has(values[i])) {
					diff.add(values[i]);
				}
			}
			return diff;
		}

		// 判断集合是否是另一个集合的子集
		this.subset = oSet => {
			if (this.size > oSet.size()) {
				return false;
			} else {
				let values = oSet.values();
				for (let i = 0, l = values.length; i < l; i++) {
					if (!this.has(values[i])) {
						return false;
					}
				}
				return true;
			}
		}
	}
})(window);