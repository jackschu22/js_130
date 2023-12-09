const { Car, Toyota } = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  test('two new cars are equal objects', () => {
    let car2 = new Car();
  
    expect(car).toEqual(car2);
  });

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raises a TypeError when drive called on it', () => {
    expect(() => car.drive()).toThrow(TypeError);   // *1
  });

  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('wheels is truthy', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);
  
    expect(arr).toContain(car);
  });

  test('string contains "car"', () => {
    let man = "His scars have healed";
    expect(man).toContain("car");   // *2
  });

  test('car has wheels', () => {
    expect(car.wheels).not.toBeUndefined();   // *3
  });
});

describe("The Toyota class", () => {
  test("extends the Car class", () => {
    let tacoma = new Toyota();
    expect(tacoma).toBeInstanceOf(Car);
  });
});

// *1 Note that we've wrapped the car.drive() invocation in a function. Otherwise, calling 
// car.drive() directly will raise an exception before toThrow gets an opportunity to detect it.

// *2 toContain also works with strings and some other "iterable" types like sets. When working 
// with strings, it matches substrings.

// *3 To assert the opposite of a matcher, use the not property on the object returned by expect