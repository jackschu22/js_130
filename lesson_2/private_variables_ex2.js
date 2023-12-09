// Write a makeList function that creates and returns a new function that implements 
// a todo list. The returned function should have the following behavior:

	// - When called with an argument that is not already on the list, it adds that 
	//   argument to the list.
	// - When called with an argument that is already on the list, it removes the 
	//   element from the list.
	// - When called without arguments, it prints all of the items on the list. If the 
	//   list is empty, it prints an appropriate message.

function makeList() {
	let todos = [];

	return function(arg) {
		let index;
		if (arg) {
			index = todos.indexOf(arg);
			if (index === -1) {
				todos.push(arg);
				console.log(`${arg} added!`);
			} else {
				todos.splice(index, 1);
				console.log(`${arg} removed!`);
			}
		} else {
			if (todos.length) {
				todos.forEach(todo => console.log(todo));
			} else {
				console.log('The list is empty.')
			}
		}
	}
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book