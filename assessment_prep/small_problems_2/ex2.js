var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

// "hoisted" code:

function foo() {
  var bar;
  bar = bar - 42;   // bar = undefined - 42 = NaN
  console.log(bar); // NaN
}

var bar;
bar = 82;

foo();