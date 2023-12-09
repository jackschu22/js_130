// Write a function that acts like the built-in Array.prototype.map method. For this 
// problem, you only need to emulate the most basic behavior: transforming the elements 
// of an array by using the array values. You don't have to include the thisArg argument 
// or support multiple arguments to the callback function, but feel free to add them if 
// you like. Note that the function should not mutate the input array.

function map(array, callback, thisArg) {
	let transformedArray = [];

	for (let idx = 0; idx < array.length; idx++) {
		let transformedValue = callback.call(thisArg, array[idx]);
		transformedArray.push(transformedValue);
	}

	return transformedArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]