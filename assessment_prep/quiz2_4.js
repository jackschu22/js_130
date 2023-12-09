console.log(foo());

function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}

// Equivalent "hoisted" code:

// if two function declarations have the same name, the second replaces the first

function foo() {
  function bar() {
    console.log('bar again and again');
  }

  console.log(foo);

  bar();
}

console.log(foo());
// [Function: foo]
// 'bar again and again'
// undefined