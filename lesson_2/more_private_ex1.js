// Modify the makeList function so that it returns an object that provides the 
// interface shown above, including add, list, and remove methods.

function makeList() {
	return {
		items: [],

		add(item) {
			let idx = this.items.indexOf(item);
			if (idx === - 1) {
				this.items.push(item);
				console.log(`${item} added!`);
			}
		},

		remove(item) {
			let idx = this.items.indexOf(item);
			if (idx !== - 1) {
				this.items.splice(idx, 1);
				console.log(`${item} removed.`);
			}
		},

		list() {
			if (this.items.length === 0) {
				console.log('The list is empty.')
			}
			this.items.forEach(item => console.log(item));
		}
	}
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn