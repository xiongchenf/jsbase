;(function() {
	function BinarySearchTree() {
		let node = function(key) {
			this.key = key;
			this.left = null;
			this.right = null;
		}

		let root = null;

		insertNode = (root, node) => {
			if (node.key < root.key) {
				if (node.left === null) {
					node.left = node;
				} else {
					insertNode(node.left, node);
				}
			} else {
				if (node.right === null) {
					node.right = node;
				} else {
					insertNode(node.right, node);
				}
			}
		}

		inOrderTraverseNode = (node, callback) => {
			if (node !== null) {
				inOrderTraverseNode(node.left, callback);
				callback(node.key); 
				inOrderTraverseNode(node.right, callback);
			}
		}

		printNode = val => {
			console.log(val);
		}
		// 向树中插入一个元素
		this.insert = key => {
			let node = new Node(key);
			if (root === null) {
				root = node;
			} else {
				insertNode(root, node);
			}
		}
		// 中序遍历
		this.inOrderTraverse = callback => {
			inOrderTraverseNode(root, callback);
		}
		preOrderTraverseNode = (node, callback) => {
			callback(node);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
		// 先序遍历
		this.preOrderTraverse = callback => {
			preOrderTraverseNode（root, callback);
		}
		postOrderTraverseNode = (node, callback) => {
			if(node !== null) {
				postOrderTraverseNode(node.left, callback);
				postOrderTraverseNode(node.right, callback);
				callback(node);
			}
		}
		// 后序遍历
		this.postOrderTraverse = callback => {
			postOrderTraverseNode(root, callback);
		}
		minNode = node => {
			if(node) {
				while(node && node.left !== null) {
					node = node.left;
				}
				return node.key;
			}
			return null;
		}
		// 最小值
		this.min = () => {
			return minNode(root);
		}
		maxNode = node => {
			if(node) {
				while(node && node.right !== null) {
					node = node.right;
				}
				return node.key;
			}
			return null;
		}
		// 最大值
		this.max = () => {
			return maxNode(root);
		}
		searchNode = (node, key) => {
			if(node === null) {
				return false;
			}
			if(node.key < key) {
				return searchNode(node.left, key);
			} else if(node.key > key) {
				return searchNode(node.right, key);
			} else {
				return true;
			}
		}
		// 搜索
		this.search = key => {
			return searchNode(root, key);
		}
		removeNode = (node, key) => {
			if(node === null) {
				return false;
			} else if(key < node.left) {
				node.left = removeNode(node.left, key);
				return node;
			} else if(key > node.right) {
				node.right = removeNode(node.right, key);
				return node;
			} else {
				if (node.left === null && node.right === null) {
					node = null;
					return node;
				}

				if (node.left === null) {
					node = node.right;
					return node;
				} else if (node.right === null) {
					node = node.left;
					return node;
				}

				let min = minNode(node.right);
				node.key = min.key;
				node.right = removeNode(node.right, min.key);
				return node;
			}
		}
		// 移除元素
		this.remove = key => {
			root = removeNode(root, key);
		}
	}
})();