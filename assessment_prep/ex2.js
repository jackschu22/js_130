function foo() {
  if (false) {
    var a = 1;
    let b = 2;
  }

  console.log(a, 'defined!'); // 1
  console.log(b); // ReferenceError: b is not defined
}

foo();