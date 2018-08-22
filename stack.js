;(function(window){
	// 定义一个栈
	let  _p = Stack.prototype, item = [];
	function Stack() {}
	// 基础数据
	// push(element(s)):添加一个(或几个)新元素到栈顶。
	_p.push = a => {
		item.push(a);
	};
	// pop():移除栈顶的元素，同时返回被移除的元素。
	_p.pop = () => {
		return item.pop();
	};
	// peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)。
	_p.peek = () => {
		return item[item.length - 1];
	};
	// isEmpty():如果栈里没有任何元素就返回true，否则返回false。
	_p.isEmpty = () => {
		return item.length ? false: true
	};
	// clear():移除栈里的所有元素。
	_p.clear = () => {
		item = [];
	};
	// size():返回栈里的元素个数。这个方法和数组的length属性很类似。
	_p.size = () => {
		return item.length;
	};
	// print(): 顯示棧內元素
	_p.print = () => {
		return item.toString();
	}
	window.Stack = Stack;
})(window);