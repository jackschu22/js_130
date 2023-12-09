for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

// Without running this code, what will it display? Explain your reasoning.

// => undefined
// => 'Hello'
// => 'Bye'
// => 2

// On the first execution of the loop, when `index` = 0, line 2 will print `undefined`, 
// as `foo`'s declaration on line 4 is hoisted, but its assignment isn't. `index` === 0,
// so the `if` statement on line 3 will execute and assign `foo` to the primitive string
// `Hello`. The loop executes a second time, `foo` now logs the primitive string `Hello`
// on line 2, which was assigned to `foo` on the first iteration of the loop. `index`
// !== 0, so `foo` is reassigned to 'Bye'. `index` = 2, so the loop doesn't execute
// for a third time. On line 10, the current value of `foo` ('Bye') is logged. On line
// 11, the current value of `index` (`2`) is logged.

// ^ revise answer