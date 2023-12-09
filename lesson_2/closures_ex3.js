// What do the 4 console.log statements at the end of this program print?

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());	// => 1
console.log(incrementCounter());	// => 2

incrementCounter = makeCounter();	// => new function, new local `counter` in closure
console.log(incrementCounter());	// => 1
console.log(incrementCounter());	// => 2