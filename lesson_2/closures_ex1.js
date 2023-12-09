// What do the 4 console.log statements at the end of this program print?

let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());	// => 1
console.log(incrementCounter());	// => 2

incrementCounter = makeCounter();	// new function references same global `counter`
console.log(incrementCounter());	// => 3
console.log(incrementCounter());	// => 4