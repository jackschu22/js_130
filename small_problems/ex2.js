// JS130 Small Problems: Closures, Private Data, and IIFEs Problem 2:

// Alter the myBind function written in the previous exercise to support partial 
// function application of additional arguments to the original function.

function myBind(func, context, ...partialArgs) {
	return function(...args) {
		const fullArgs = partialArgs.concat(args);

		return func.apply(context, fullArgs);
	}
}

let obj = {
	a: 1,
	
	say(...args) {
		console.log(`${this.a} ${...args}`);
	}
}


let obj2 = {
	a: 5,
	
	ask(...args) {
		console.log(`${this.a} ${...args}?`);
	}
}

