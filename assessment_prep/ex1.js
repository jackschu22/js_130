function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

xyzzy(obj);