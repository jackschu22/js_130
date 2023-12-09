// Explain in detail what lines 9 and 10 of this code are doing.

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

// Line 9 is declaring a new object (`obj2`) and assigning it to reference a new
// object literal with the same properties as `obj` (although `obj2` is NOT the same
// object as `obj`)

// Line 10 is also declaring a new object (`obj3`) that is a copy of `obj`.

// LS ANSWER:
// On line 7, {...obj} on the right side of the assignment operator uses spread syntax 
// to separate obj into its properties. The brackets that wrap ...obj use object literal 
// syntax to create a new object from the properties of the original obj. On the left side 
// of the assignment operator, a new variable called obj2 is declared. The object that 
// was created with object literal syntax is assigned to this new variable. In summary, 
// line 7 made a shallow copy of obj.

// On line 8, on the left side of the assignment operator, object destructuring is used 
// to separate the properties of obj. However, the only variable that's created is using 
// rest syntax to take all of the spread out properties and re-collect them into obj3. 
// Line 8 is also making a shallow copy of obj.