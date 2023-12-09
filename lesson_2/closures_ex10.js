// Write a function that emulates the context binding aspect of bind. That is, your 
// version of bind should merely call the function with the desired context; it doesn't 
// need to pass any arguments to the function.

"use strict";

function bind(context, func) {
	return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }