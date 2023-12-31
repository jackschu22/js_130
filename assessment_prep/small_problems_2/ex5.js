// #1
// const arr = [1, 2, 3];

// const [ first, ...arr2 ] = arr;

// console.log(first, arr2);

// #2
// const arr = [1, 2, 3];

// const [ , second , ] = arr;

// console.log(second);

// #3
const obj = { a: 'a', b: 'b', c: 'c' };

const { c: tail, ...obj2 } = obj;

console.log(tail, obj2);