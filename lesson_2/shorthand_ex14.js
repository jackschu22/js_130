// Invoke your sum function using both a list of numbers and spread syntax from an 
// array of numbers.

function sum(...nums) {
	return nums.reduce((sum, num) => sum + num);
}

console.log(sum(1, 2, 3));	// => 6

let arr = [1, 2, 3];

console.log(sum(...arr));	// => 6