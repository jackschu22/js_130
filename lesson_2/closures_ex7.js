// Without running the following code, determine what value it logs on the last line. 
// Explain how the program arrived at that final result.

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3); // 6
result += bar(4);	 // 6 * 4 + 6 = 30
result += bar(5);    // 24 * 5 + 30 = 150
console.log(result); // 150

// On line 12, the function `foo` is invoked with 2 passed as an argument and 
// assigned to the parameter `start`, whose value is assigned to the function-scoped
// variable `prod`. `foo` returns a function that accepts one argument, which is
// multiplied by the value of `prod` (2). `prod` is reassigned to the result of this
// multiplication and returned. This function is assigned to the variable `bar` and
// then invoked on line 13.