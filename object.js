class MyCanvas {
	constructor(props) {
		console.log(this);
		this.name = 'My Canvas plugs.';
	}

	init() {
		this.funcName = 'init';
	}

	sayName (name) {
		console.log(this);
		console.log(name);
		console.log('sayName');
		return this.name;
	}

}

MyCanvas.prototype.arrowThis = () => {
	return this;
}

MyCanvas.prototype.sayThis = function() {
	return this;
}

MyCanvas.prototype.sayName = function () {
	console.log(this.name);
	return this.name
}

let mc = new MyCanvas();

console.log(typeof MyCanvas)
console.log(MyCanvas)
console.log(typeof mc)
console.log(mc)

mc.sayName('my plugs');

console.log(typeof MyCanvas.__proto__); // function
console.log(MyCanvas.__proto__) // native code
console.log(MyCanvas.__proto__.sayThis); // undefined

console.log((new MyCanvas()).sayThis); // function
console.log((new MyCanvas()).sayThis()); // 


console.log((new MyCanvas()).arrowThis); // function
console.log((new MyCanvas()).arrowThis()); // window
// MyCanvas.arrowThis();

class MCvas extends MyCanvas {
	constructor(props) {
		super(props);
		this.name = 'mcvas';
	}

	// showName() {
	// 	console.log(this);
	// 	return this.name
	// }
}


let mcvas = new MCvas();

mcvas.name = 'mcvas';
console.log(mcvas);
console.log(mcvas.showName());



