;(function(window) {
	window.DoubleLinkedList = function() {
		let Node = function(el) {
			this.pre = null;
			this.el = el;
			this.next = null;
		},
		head = null,
		length = 0,
		tail = null; //尾部x
		// inset() 在任意位置插入元素
		this.insert = (pos, el) => {
			if(pos > -1 && pos <= length) {
				let node = new Node(el),
				cur = head,
				pre = null,
				index = 0;
				if (pos === 0) { //第一个位置
					if (!head) {
						head = node;
						tail = node;
					} else {
						node.next = cur;
						cur.pre = node;
						head = node;
					}
				} else if (pos === length) {
					cur = tail;
					cur.next = node;
					node.pre = cur;
					tail = node;
				} else {
					while(index++ < pos) {
						pre = cur;
						cur = cur.next;
					}
					node.next = cur;
					node.pre = pre;
					pre.next = node;
					cur.pre = node;
				}
			} else {
				return false;
			}
		}
		// removeAt() 从任意位置删除元素
		this.removeAt = pos => {
			if(pos > -1 && pos <= length) {
				let cur = head,
				pre,
				index = 0;
				if(pos === 0) {
					head = cur.next;
					if(length === 1) { // 如果链表的长度为1
						tail = null;
					} else {
						head.pre = null;
					}
				} else if(pos === length - 1) {
					cur = tail;
					tail = tail.pre;
					tail.next = null;
				} else {
					while(index++ < pos) {
						pre = cur;
						cur = cur.next;
					}
					pre.next = cur.next;
					pre.next.pre = pre;
				}
				length--;
				return cur.el;
			} else {
				return false;
			}
		}
		// 获取el所在的位置
		this.indexOf = el => {
			let cur = head,
			index = 0;
			while(cur) {
				if(cur.el === el) {
					return index;
				}
				index++;
				cur = cur.next;
			}
			return -1;
		}
		// 移除el元素
		this.remove = el => {
			let index = this.indexOf(el);
			this.removeAt(index);
		}
		// 是否为空
		this.isEmpty = () => {
			return length ? false: true;
		}
		// 双向链表的长度
		this.size = () => {
			return length;
		}
		// 链表头
		this.getHead = () => {
			return head;
		}
		// 链表尾
		this.getTail = () => {
			return tail;
		}
		// 展示链表内容
		this.print = () => {
			let cur = head, index = 0, str = '';
			while(cur) {
				str += cur.toString();
				cur = cur.next;
			}
			return str;
		}
	};
})(window);