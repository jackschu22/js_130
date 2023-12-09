// 1: Will the following code execute without error? Try to answer without running it.

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// The code, as written, will log an error. Function declarations must be converted
// to function expressions before they can be invoked with IIFE syntax.

// 2: Rewrite the example from the previous so that it executes without error.

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();