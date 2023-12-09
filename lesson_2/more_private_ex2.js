// Update the implementation from problem 1 so that it retains the use of an object 
// with methods but prevents outside access to the items the object stores internally.

function makeList() {
	let items = [];		// declare `items` outside returned obj, included in closure
	return {
		add(item) {
			let idx = items.indexOf(item);
			if (idx === - 1) {
				items.push(item);
				console.log(`${item} added!`);
			}
		},

		remove(item) {
			let idx = items.indexOf(item);
			if (idx !== - 1) {
				items.splice(idx, 1);
				console.log(`${item} removed.`);
			}
		},

		list() {
			if (items.length === 0) {
				console.log('The list is empty.')
			}
			items.forEach(item => console.log(item));
		}
	}
}