;(function(window) {
	// 定義鏈錶
	window.LinkedList = function() {
		let Node = (el) => {
			this.el = el;
			this.next = null;
		},
		length = 0,
		head = null;

		// append(element):向列表尾部添加一个新的项。
		this.append = el => {
			let node = new Node(el), cur;
			if(head === null) {
				head = node;
			} else {
				cur = head;
				while(cur.next) {
					cur = cur.next;
				}
				cur.next = node;
			}
			length++;
		}
		// insert(position, element):向列表的特定位置插入一个新的项。
		this.insert = (pos, el) => {
			let cur = head, node = new Node(el), 
				index = 0, pre = null;
			if(pos > -1 && pos <= length) {
				if(pos === 0) {
					node.next = cur;
					head = node;
				} else {
					while(index++ < pos) {
						pre = cur;
						cur = cur.next;
					}
					pre.next = node;
					node.next = cur;
					length++;
				}
				return true;
			} else {
				return false;
			}
		}
		// removeAt(position):从列表的特定位置移除一项。
		this.removeAt = pos => {
			let cur = head, index = 0, pre = null;
			if(pos > -1 && pos <= length) {
				if(pos === 0) {
					head = cur.next;
				} else {
					pre = cur;
					cur = cur.next;
				}
				pre.next = cur.next;
				length--;
				return cur.el;
			} else {
				return null;
			}
		}
		// indexOf(element):返回元素在列表中的索引。如果列表中没有该元素则返回-1。
		this.indexOf = el => {
			let cur = head, res = null, index = 0;
			while(cur) {
				if (cur.el === el) {
					return index;
				}
				index++;
				cur = cur.next;
			}
			return -1;
		}
		// remove(element):从列表中移除一项。
		this.remove = el => {
			let index = this.indexOf(el);
			this.removeAt(index);
		}
		// isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。 size():返回链表包含的元素个数。与数组的length属性类似。 toString():由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的
		this.isEmpty = () => {
			return length ? false: true
		}
		// toString方法，让其只输出元素的值。
		this.toString = () => {
			let cur = head,
			str = '';
			while(cur) {
				str += cur.toString();
				cur = cur.next;
			}
			return str;
		}
		// size方法，输出长度
		this.sie = () => {
			return length;
		}
		// getHead方法，输出head
		this.getHead = () => {
			return head;
		}
	}
})(window);
