// Use array and object destructuring to extract the elements and properties from 
// arr and obj into individual variables.

const arr = [1, 2, 3];
let [ one, two, three ] = arr;
console.log(one, two, three);	// => 1 2 3

const obj = { a: 'a', b: 'b', c: 'c' };
let { a, b, c } = obj;
console.log(a, b, c);	// => 'a' 'b' 'c'