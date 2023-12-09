// JS130 Small Problems: Closures, Private Data, and IIFEs Problem 3:

// Create a function newStack, that, when called, returns a stack object with three 
// methods: push, pop, and printStack. push takes a value and appends it to the stack. 
// pop removes and returns the last element from the stack. printStack logs each 
// remaining element of the stack on its own line, starting with the item that was 
// least recently added to the stack and ending with the most recently added item that 
// is still on the stack.

function newStack() {
	let stack = [];

	return {
		push(item) {
			stack.push(item);
		},

		pop() {
			return stack.pop();
		},

		printStack() {
			stack.forEach(item => console.log(item));
		}
	}
}

// The variable `stack` will exist in the closure created by invoking `newStack`,
// so that it will essentially be a private variable that can only be accessed through 
// the methods available on the returned object. `stack` cannot be directly accessed
// in the global scope, although it clearly exists and is being modified by the methods
// on `myStack`

let myStack = newStack();
myStack.push('hello');
myStack.push('world');
console.log(myStack.pop());	// 'world'
myStack.printStack();	// 'hello'
console.log(stack);	// ReferenceError: stack is not defined

// Invoking `newStack` again will return a NEW stack object with a NEW copy of `stack`
// available in the created closure

let anotherStack = newStack();
anotherStack.push('wow');
anotherStack.printStack();	// 'wow' --> new array `stack` exists in new closure,
																			// distinct from the array in `myStack`'s closure


