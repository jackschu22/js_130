//

for (let i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? 'Go!' : i);
  }, (5 - i) * 1000)
}

// Block-scoped variables (declared with `let` or `const`, although `const` can't be reassigned)
// are confined to the block they're defined in. Thus, each time the function is defined on each
// execution of the loop, the newly created closure will include a pointer* to the variable `i`

// *pointer to the original variable, not the value it contains

// MDN Article on `for` loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// "Subsequent updates to the value of `i` actually create new variables called `i`, which the functions
// passed to `setTimeout` do not "see" when they're invoked -- their closures include a pointer to the 
// variable `i` that was created (?) on that execution of the loop

// More precisely, `let` declarations are special-cased by for loops — if initialization is a `let` 
// declaration, then every time, after the loop body is evaluated, the following happens:

  // - A new lexical scope is created with new `let`-declared variables.
  // - The binding values from the last iteration are used to re-initialize the new variables.
  // - `afterthought` is evaluated in the new scope."