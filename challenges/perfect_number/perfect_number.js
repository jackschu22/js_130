/*
Problem: classify a number (perfect, abundant, deficient) according to its aliquot sum
- Input: number
- Output: string ('perfect', 'abundant', 'deficient') or throws error

Examples/Test Cases:
- `PerfectNumber` class
- `classify` method returns string or throws error
- aliquot sum: sum of positive divisors/factors of number
  - 15 has positive factors 1, 3, 5 => aliquot sum = 9
- perfect number: aliquot sum  === number
  - 6: 1 + 2 + 3 = 6 (perfect)
- abundant number: aliquot sum > number
  - 24: 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 (abundant)
- deficient number: aliquot sum < number
  - 15: 1 + 3 + 5 = 9 (deficient)

Data Structures:
- collection to hold divisors of number

Algorithm:

- create class `PerfectNumber`
  - constructor
    - input: number
    - initialize `number` property on instance
  - static method `classify`
    - input: number
    - output: string or error
    - if num is negative, `throw new Error()`
    - declare empty array `divisors`
    - iterate from 1 to num (for loop)
      - if current number is a factor of num, push to `divisors`
    - calculate sum of elements of `divisors` (aliquot sum)
    - compare aliquot sum to original number, return appropriate classification string
*/

class PerfectNumber {
  constructor(number) {
    this.number = number;
  }

  static classify(num) {
    if ((num) < 0) throw new Error();

    let divisors = [];

    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }

    let aliquotSum = divisors.reduce((sum, num) => sum + num);

    if (aliquotSum === num) {
      return 'perfect';
    } else if (aliquotSum > num) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumber;