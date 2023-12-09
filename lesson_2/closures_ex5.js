// Write a function named makeMultipleLister that you can call with a number as an 
// argument. The function should return a new function that, when invoked, logs every 
// positive integer multiple of that number less than 100.

function makeMultipleLister(multiple) {
	return function() {
		for (let num = 1; num < 100; num++) {
			if (num % multiple === 0) {
				console.log(num);
			}
		}
	}
}

let lister = makeMultipleLister(17);
lister();

// 17
// 34
// 51
// 68
// 85