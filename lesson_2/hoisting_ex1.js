var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

// Without running this code, what will it display? Explain your reasoning.

// Since the function `foo` and the `var` declaration share the same name, the `var`
// declaration will be discarded. The equivalent code with a hoisted function 
// declaration and discarded `var` declaration is shown below:

function foo() {
  console.log("Hello");
}

foo = function() {
  console.log("Bye");
}

foo(); // => 'Bye'