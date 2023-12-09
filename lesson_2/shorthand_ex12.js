// Use destructuring to extract the c property of obj from a new variable called 
// tail and extract the remaining properties into a new object called obj2.

const obj = { a: 'a', b: 'b', c: 'c' };
const { c: tail, ...obj2 } = obj;
console.log(obj2, tail);	// => { a: 'a', b: 'b' } c