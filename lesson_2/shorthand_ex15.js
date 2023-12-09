// Use spread syntax to invoke the prod function with arr and explain what is 
// happening as part of your answer.

const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));	// => 2

// Spread syntax deconstructs the array of arguments that is passed to `prod`,
// equivalent to the code below:

console.log(prod(1, 2, 3));	// => 2

// Only the first two arguments passed to the function are assigned to the function-
// scoped parameters `num1` and `num2`, while the third argument is not used in the
// function.