let array = [1, 2, 3];
let [ ...newArray ] = array;

console.log(newArray);

let newArray2 = { ...array};
console.log(newArray2);