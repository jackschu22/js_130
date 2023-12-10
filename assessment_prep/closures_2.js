function makeHuman(name) {
  function sayHi() {
    console.log(`Hi, I'm ${name}!`);
  }

  function sayHowYouFeel() {
    console.log(`${name} is feeling good!`)
  }

  return {
    sayHi,
    sayHowYouFeel
  }
}

let pete = makeHuman('pete');
let antonina = makeHuman('antonina');

pete.sayHi();
antonina.sayHi();

// When the factory function `makeHuman` is invoked, the functions
// `sayHi` and `sayHowYouFeel` are declared and returned as methods
// on an object. When these functions are defined, a "closure" is created
// that envelops each function with a pointer to the value of `name` at
// the time of the functions' definitions. Thus, when the `sayHi` method
// is invoked on the newly created objects referenced by `pete` and `antonina`,
// the methods retain access to the value of `name` that was passed to
// `makeHuman` as an argument, which would otherwise appear to be out of scope
// on lines 19 and 20.

// "Closures *remember* the outer function scope even after creation time"