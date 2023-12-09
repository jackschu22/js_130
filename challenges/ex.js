"use strict"

const f = (function() {
  let count = 0
  return function() {
    return 'I have been called ${++count} time(s).';
  }
})();

f();  // 'I have been called 1 time(s).'
f();  // 'I have been called 2 time(s).'
count = 0;  // ReferenceError: count is not defined