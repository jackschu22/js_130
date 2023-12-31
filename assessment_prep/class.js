
let kitty = new Cat('miles');
kitty.meow();

var Cat = class {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log('meow!');
  }
}