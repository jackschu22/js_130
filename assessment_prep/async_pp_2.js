// In our solution for the previous problem, what do you think would happen if you replaced 
// `let delay` with `var delay`? Go ahead and try it and see if you can explain the difference 
// in behavior.

function delayLog() {
  for (var i = 1; i<= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

delayLog();

// In this case, where `i` is declared with the keyword `var, the code can be thought of as
// behaving as if it were written as shown below, with `i` declared in the outer scope of 
// the `for` loop:

function delayLog() {
  var i;
  for (i = 1; i<= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

// On each iteration of the `for` loop, a callback function is defined and passed to `setTimeout`,
// with a delay of `1000 * i`. When the callback is defined, a pointer to the global variable `i` 
// is included in its closure so that the function will be able to access the variable it needs 
// when it is invoked after its delay. Because `i` was declared with `var`, it is a function-scoped 
// variable that behaves as though it was declared outside of the `for` loop. The `for` loop executes 
// 10 times in quick succession, updating the value of `i` to 11 almost a full second before the
// first callback executes. When each callback eventually executes, spaced 1s apart, it will
// access and log the final value of `i` (11).

// LS Answer:
// The issue here is that a var declaration has function scope, so the loop uses the same `i`` 
// variable with each iteration. Due to closure, each invocation of the callback function sees the 
// current state of the `i`` variable. Since the callback doesn't get called until long after the 
// loop finishes, it gets the final value of `i``, e.g., 11.

// Since let has block scope, each iteration in the solution to the previous problem forms a closure 
// with a different variable. Thus, each callback's closure encloses a different delay variable.