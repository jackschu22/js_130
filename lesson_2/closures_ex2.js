// What do the 4 console.log statements at the end of this program print?

function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());	// => 1
console.log(incrementCounter());	// => 1

incrementCounter = makeCounter();
console.log(incrementCounter());	// => 1
console.log(incrementCounter());	// => 1

// Each time `incrementCounter` is invoked, a new local `counter` is declared and
// incremented before being returned