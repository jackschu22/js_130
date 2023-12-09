// Without running the following code, determine what it logs to the console:

var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

// Rewriting the above code as if it were hoisted:

function foo() {	// function declaration hoisted to top
  var bar;			// declaration with `var` hosited to top of function scope
  bar = bar - 42;
  console.log(bar);
}

var bar;		// hoisted declaration of global `bar`
bar = 82;		// reassignment of global `bar`

foo();