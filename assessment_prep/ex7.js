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

// function foo() {
//   function bar() {
//     console.log('bar again and again');
//   }

//   console.log(foo);

//   bar();
// }

// console.log(foo());

// [Function: foo] (8)
// 'bar again and again' (16)
// undefined (1)