//

var i;

for (i = 5; i >= 0; i--) {
  (function(i) {
    setTimeout(function() {
      console.log(i === 0 ? 'Go!' : i);
    }, (5 - i) * 1000)
  })(i);
}

// Book answer:
// Creating a named function to create private scope as in the last example can get tedious.
// As an alternative, IIFEs essentially create equivalent anonymous functions that are
// invoked immediately. The exact same thing is being accomplished as in the last example:
// we're creating a function that takes a single argument, and invokes it for each step in
// the loop.