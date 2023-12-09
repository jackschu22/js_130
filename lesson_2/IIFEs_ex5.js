// Is the named function inside this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo() // ? => ReferenceError: foo is not defined

// No, the function `foo` is not accessible in the global scope, because IIFEs create
// a private scope within the expression.