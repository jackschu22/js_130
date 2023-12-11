/*
Problem: given a natural number and a set of one or more other numbers, find the sum of all
multiples of the numbers in the set that are less than the given natural number.
- input:
- output: number

Examples/Test Cases:
- static method uses default multiples 3, 5
- instance method has customized multiples

Data Structures:
- array of multiples

Algorithm:

- `SumOfMultiples` class
  - constructor
    - takes variables number of numbers inputs (...args)
    - assign args to `multiples` property (array)

  - static method `to`
    - input: number
    - output: number
    - declare `sum`, initialize to 0
    - declare `multiples` array with elements [3, 5]
    - iterate from 1 to (not including) input number
      - if current number is divisble by any element of `multiples`, add to sum

  - instance method `to`
    - input: number
    - output: number
    - declare `sum`, initialize to 0
    - iterate from 1 to (not including) input number
      - if current number is divisble by any element of `this.multiples`, add to sum
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length > 0 ? [...multiples] : [3, 5];
  }

  static to(num) {
    let newObj = new SumOfMultiples();

    return newObj.to(num);
  }

  to(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
      if (this.multiples.some(multiple => i % multiple === 0)) {
        sum += i;
      }
    }

    return sum;
  }
}

module.exports = SumOfMultiples;