// Using `setTimeout` in loop, separate function to create closures

function loopBody(i) {
  setTimeout(function() {
    console.log(i === 0 ? 'Go!' : i);
  }, (5 - i) * 1000)
}

var i;

for (i = 5; i >= 0; i--) {
  loopBody(i);
}

// Book answer/my answer:
// Using an additional function creates a new scope, and the value of
// `i` can be "captured" in a closure at each step. At each step in the loop,
// `loopBody` is invoked, with `i` passed as an argument to the function.
// Because `i` a primitve value, it is passed by value to the function. So,
// on the first loop, 5 is passed to `loopBody`. Then, 4 is passed to the 
// function, then 3, and so on. We're essentially creating six different 
// scopes and six independent variables (one for the outer scope, and five
// for each of the `loopBody` invocations). Although the value of the global
// variable `i` is -1 when the anonymous functions are eventually invoked,
// their closures don't contain pointers to the global variable `i`, but
// rather pointers to the value of `i` that was passed to `loopBody` when
// the anonymous functions were defined and passed to `setTimeout`