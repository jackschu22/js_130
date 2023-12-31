function foo() {
  function qux() {
    bar = 3.1415;
  }
}

foo();
console.log(bar); // ReferenceError: bar is not defined

// function foo() {
//   function qux() {
//     bar = 3.1415;
//   }
//   qux();
// }

// foo();
// console.log(bar); // 3.1415