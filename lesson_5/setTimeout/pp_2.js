// In our solution for the previous problem, what do you think would happen if you 
// replaced let delay with var delay? Go ahead and try it and see if you can explain 
// the difference in behavior.

function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();
// 11  // 1 second later
// 11  // 1 second later (2 seconds after start)
// 11  // 1 second later (3 seconds after start)
// 11  // etc...
// 11
// 11
// 11
// 11
// 11
// 11

// Variables declared with `var` are function-scoped, so by the time the loop finishes
// executing, the value of the function-scoped variable `delay` is 11. One second later,
// the first console.log statement executes. Since `let` has block scope, each iteration 
// in the solution to the previous problem forms a closure with a different variable. 
// Thus, each callback's closure encloses a different delay variable.