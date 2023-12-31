// var vs let declarations

// var -> function scope
// let -> block scope

function foo() {
  console.log(qux);
  {
    let bar = 10;
    var qux = 20;
  }
  console.log(qux); // 20
  console.log(bar); // ReferenceError: bar is undefined
}

foo();

// Equivalent Hoisted Code:

// function foo() {
//   var qux;
//   console.log(qux);
//   {
//     let bar;  // TDZ -> unset initial value
//     bar = 10;
//     qux = 20;
//   }
//   console.log(qux); // 20
//   console.log(bar); // ReferenceError: bar is undefined
// }