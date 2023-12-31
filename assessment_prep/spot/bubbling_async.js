// You cannot catch an exception thrown by an asynchronous function because it’s raised after the 
// try ... catch block has completed execution. This will fail:

function waitASecond() {

  setTimeout(() => {
    throw new Error('I am never caught!');
  }, 1000);

}

try {
  waitASecond();
} catch(err) {
  // this will never run
  console.error('caught!', err.message);
}

// PFA -- compe up with similar, unique example
// decrease in the number of args required by inner function vs outer function
// (1) create function
// (2) create function that makes a new custom function of previous function
// (3) invoke

function add(num1,num2) {
  return num1 + num2
}

function makeAdder(num1) {
  return function(num2) {   // new Add function
    return add(num1,num2);  // as if we're calling with one argument
  }
}

let addFive = makeAdder(5);
console.log(addFive(10));   // 15