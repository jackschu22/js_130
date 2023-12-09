// Use rest syntax to create a function sum that takes an arbitrary number of 
// arguments and returns their sum.

function sum(...nums) {
	return nums.reduce((sum, num) => sum + num);
}