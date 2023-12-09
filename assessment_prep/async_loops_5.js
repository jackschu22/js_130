//

let i;

for (i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? 'Go!' : i);
  }, (5 - i) * 1000)
}

// Now, as in example 1, the variable `i` that is included in the anonymous
// functions' closures is a global variable, whose final value will be accessed
// when the functions execute after their respective delays.