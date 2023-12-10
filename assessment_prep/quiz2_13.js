function xyzzy({ msg, foo, bar, qux }) {
  return {
    foo: foo,
    bar: bar,
    qux: qux,
    log: function() {
      console.log(msg);
    },
  };
}

let tub = xyzzy({msg: 1, foo: 2, bar: 3, qux: 4})
tub.log()