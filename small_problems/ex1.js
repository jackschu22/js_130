// JS130 Small Problems: Closures, Private Data, and IIFEs Problem 1:

// Create a function myBind, that accepts two arguments: 1) The function to bind, 
// 2) The context object, and returns a new function that's hard-bound to the passed 
// in context object.

// Hint: Use Function.prototype.apply in your solution.

function myBind(func, context) {
	return function() {
		return func.apply(context);
	}
}

let obj = {
	a: 1,
	b: 2,
}

function func() {
	return this.a + this.b;
}

let boundFunc = myBind(func, obj);
console.log(boundFunc())	// 3

let obj2 = {
	a: '1',
	b: '2',
}

console.log(boundFunc.call(obj2));	// 3