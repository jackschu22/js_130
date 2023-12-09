// Rewrite the code below using let instead of var. Your goal here is to change the way 
// the variables are declared without altering the output of the program.

function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
console.log(); // space

// Re-write with hoisting applied

function foo(condition) {
	var qux;
	var bar;
	var xyzzy;

	console.log(bar)

	qux = 0.5772;

	if (condition) {
		qux = 3.1415;
		console.log(qux);
	} else {
		bar = 24;

		xyzzy = function() {
			var qux = 2.7183;
			console.log(qux);
		};

		console.log(qux);
		console.log(xyzzy());
	}

	qux = 42;
	console.log(qux);
}

foo(true);
foo(false);
console.log(); // space

// Re-write with `let` instead of `var`, maintain same output

function foo(condition) {
	let bar;

	console.log(bar);

	let qux = 0.5772;

	if (condition) {
		qux = 3.1415;
		console.log(qux);
	} else {
		bar = 24;

		let xyzzy = function() {
			let qux = 2.7183;
			console.log(qux);
		};

		console.log(qux);
		console.log(xyzzy());
	}

	qux = 42;
	console.log(qux);
}

foo(true);		// same output as above
foo(false);		// same output as above
