// Declared scope: depends on keyword used
  // block scope: let, const, class
  // function scope: var, function
func = function() {console.log('hi')};
// foo1 = 1;        // declared scope is block scope
// var bar1 = 2;        // declared scope is function scope

if (true) {
  let foo2 = 3;      // declared scope is block scope
  var bar2 = 4;      // declared scope is function scope
}

function xyzzy() {  // declared scope is function scope
  let foo3 = 5;     // declared scope is block scope
  var bar3 = 6;     // declared scope is function scope

  if (true) {
    let foo4 = 7;   // declared scope is block scope
    var bar4 = 8;   // declared scope is function scope
    
  }
}

{
  // function qux() {console.log('hi')};
  var qux = 10;
}
console.log(qux); // TDZ

test = function() {
  newVar = '0'
}

var newerVar = 0;

// test()

console.log(newVar);

var animal1;

class Animal {
  constructor() {
    
  }
}

// Visibility scope: where a variable is "visible"
  // global
  // local

  // console.log(bar1);  // undefined
  // console.log(foo1); // ReferenceError: foo1 is not defined

  // let foo1 = 1;        // visibility scope is global
  // var bar1 = 2;        // visibility scope is global
  
  // console.log(bar2); // undefined
  // // console.log(foo2); // ReferenceError
  // if (true) {
  //   // console.log(foo2);  // ReferenceError
  //   let foo2 = 3;      // visibility scope is local (local block)
  //   var bar2 = 4;      // visibility scope is global
  // }
  
  // function xyzzy() {  // visibility scope is global
  //   let foo3 = 5;     // visibility scope is local (local function)
  //   var bar3 = 6;     // visibility scope is local (local function)
  
  //   if (true) {
  //     let foo4 = 7;   // visibility scope is local (local block)
  //     var bar4 = 8;   // visibility scope is local (local function)
  //   }
  // }

  // function xyzzy() {
  //   let foo3;
  //   let bar3;
  //   let bar4 = undefined;

  //   foo3 = 5;
  //   bar3 = 6;

  //   if (true) {
  //     let foo4;
  //     foo4 = 7;
  //     bar4 = 8;
  //   }
  // }

// Lexical scope
  // inner scope
  // outer scope

  var bar1 = 1;     // outer scope of xyzzy, outer scope of if block on line 3

  if (true) {
    var bar2 = 3;   // outer scope of xyzzy, outer scope of if block on line 3
  }
  
  function xyzzy() {
    var bar3 = 5;   // inner scope of xyzzy, outer scope of if block on line 10
  
    if (true) {
      var bar4 = 7; // inner scope of xyzzy, outer scope of if block on line 10
    }
  }

