// Write a function named makeMultipleLister that you can call with a number as an argument. 
// The function should return a new function that, when invoked, logs every positive integer 
// multiple of that number less than 100. It should work like this:

function makeMultipleLister(num) {
  return function() {
    for (let i = 1; i < 100; i++) {
      if (i % num === 0) {
        console.log(i);
      }
    }
  }
}

let lister = makeMultipleLister(17);
lister();
// 17
// 34
// 51
// 68
// 85

let lister5 = makeMultipleLister(5);
lister5();