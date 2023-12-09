// // Write a function named startCounting that logs a number to the console every second, 
// // starting with 1. Each output number should be one greater than the previous one.

function startCounting() {
  let count = 0;
  let counterID = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);

  return counterID;
}

startCounting();

// Extend the code from the previous problem with a stopCounting function that stops 
// the logger when called.

function stopCounting(counterID) {
  clearInterval(counterID);
}

let counterID = startCounting();

stopCounting(counterID);
