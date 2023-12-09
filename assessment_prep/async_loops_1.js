// Using `setTimeout` in loop, counter declared with `var

for (var i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? 'Go!' : i);
  }, (5 - i) * 1000)
}

// The loop's counter is declared with the `var` keyword on line 3, meaning
// `i` will be a global variable that behaves as if the code was rearranged
// as below:

// var i;

// for (i = 5; i >= 0; i--) {
//   setTimeout(function() {
//     console.log(i === 0 ? 'Go!' : i);
//   }, (5 - i) * 1000)
// }

// In quick succession, the loop executes six times, passing the anonymous
// function defined on lines 4-6 to `setTimeout` six times, with the delay
// increased by 1000ms each time the *global* variable `i` is decremented. 
// The closure that is created by the anonymous function's definition includes 
// a pointer to `i`, the global variable`. Thus, by the time the anonymous 
// functions are executed after their respective delay periods, the value of the 
// global variable `i` is -1, which will be logged to the console six times,
// with a one second delay between each logged value.

// Book answer:
// The function passed to `setTimeout` is not invoked in the loop; it will
// be invoked after its delay period. So, the loop will run with `i` starting
// at 5 and eventually reaching -1... all before any of the functions are
// invoked. By the time the functions are invoked, the value of `i` is -1.
// Block scope (variables declared with `let`) solves this.