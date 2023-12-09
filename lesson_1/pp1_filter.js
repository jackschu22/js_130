// Write a function that acts like the built-in Array.prototype.filter method. For this 
// problem, you only need to emulate the most basic behavior: filtering elements of an 
// array by examining the array values. You don't have to support multiple arguments to 
// the callback function, but feel free to add them if you like. Note that the function 
// should not mutate the input array.

function filter(arr, callback, thisArg) {
	let result = [];

	for (let idx = 0; idx < arr.length; idx++) {
		if (callback.call(thisArg, arr[idx])) {
			result.push(arr[idx]);
		}
	}

	return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]