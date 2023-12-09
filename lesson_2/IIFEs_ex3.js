// Why does this code produce an error? Correct the problem by using an IIFE.

// This code produces an error because the variable `sum` is declared twice. Using an
// IIFE will create a private scope for the `sum` function that won't conflict with
// the global variable `sum` defined on the first line.

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);