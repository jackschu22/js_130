var foo = 10;

function bar() {
  if (foo > 20) {
    var foo = 50;
  }

  console.log(foo);
  foo += 10;
}

bar();  // undefined
bar();  // undefined
bar();  // undefined

// Equivalent "hoisted" code:

// var foo;


// function bar() {
//   var foo;

//   if (foo > 20) {
//     foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// foo = 10;

// console.log(bar());  // undefined
// console.log(bar());  // undefined
// console.log(bar());  // undefined