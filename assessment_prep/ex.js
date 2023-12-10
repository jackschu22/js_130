
if(true) {
  if (true) {
    function x() {
      console.log('x')
    }
  }
}

x();

// function declarations have unpredictable behavior when declared inside blocks
// if you must nest a function inside of a block, use a function expression