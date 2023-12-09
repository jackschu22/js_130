// The following code doesn't work. Without changing the order of the invocation and 
// function definition, update this code so that it works.

bar();

var bar = function() {
  console.log("foo!");
};

// The function expression `bar` is defined with the `var` keyword, so its declaration
// is hoisted above `bar`'s invocation on line 4, but its value is undefined. The 
// equivalent hoisted code is shown below:

var bar;

bar();	// => Error: invoking undefined

bar = function() {
	console.log("foo!");
}

// By declaring `bar` as a function declaration instead of a function expression,
// its entire definition will be hoisted above its invocation, shown below:

bar();	// => "foo!"

function bar() {
	console.log("foo!");
}

// The equivalent hoisted code is shown below:

function bar() {
	console.log("foo!");
}

bar();

// If we want to call a function before its body is defined, we need to use a 
// function declaration.