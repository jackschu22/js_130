// Part 1: Explain what is logged to the console and *when*

for (let i = 0; i < 3; i++) {

  const log = () => {
    console.log(i);
  }

  setTimeout(log, 1000);
}

// 1 second delay, then `log` is invoked three times, referencing the value of local variable `i` when each copy of `log` was defined.
  // *nothing logged from t = 0ms to t = 1000ms*
  // 0 (t = 10001ms)
  // 1 (t = 10002ms)
  // 2 (t = 10003ms)


// Part 2: Explain what is logged to the console and *when*

for (var i = 0; i < 3; i++) {

  const log = () => {
    console.log(i);
  }

  setTimeout(log, 1000);
}

// 1 second delay, then `log` is invoked three times, referencing the current (final) value of global variable `i` (3)
  // *nothing logged from t = 0ms to t = 1000ms*
  // 3 (t = 10001ms)
  // 3 (t = 10002ms)
  // 3 (t = 10003ms)

// the `for` loop executes so quickly that `log` is essentially passed to `setTimeout` three times in quick succession.
// all three calls to `setTimeout` then wait 1000ms to invoke `log`.