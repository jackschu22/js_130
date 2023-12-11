// - Write a function named startCounting that logs a number to the console every second, 
// starting with 1. Each output number should be one greater than the previous one.
// - Extend the code from the previous problem with a stopCounting function that stops 
// the logger when called.

function startCounting() {
  let num = 1;
  let counterID = setInterval(() => {
    console.log(num);
    num++;
  }, 1000);
  return counterID;
}

function stopCounting(counterID) {
  clearInterval(counterID);
}

////

// initialize flag to false
let flag = false;

// 
let counterID = startCounting();

// after 5 seconds, set flag to true
setTimeout(() => flag = true, 5000);


// check flag every second
setInterval(() => {
  if (flag) {
    stopCounting(counterID);
  }
}, 1000);
