/*
Problem: given a base-8 number (represented as a string), convert it to a base-10 number
- input: base-8 number (string)
- output: base-10 number (number)

Examples/Test Cases:
- invalid input returns decimal 0
  - 8, 9, letters are invalid (0-7 ONLY)
- 233 octal -> decimal
  - work with digits right to left:
    - rightmost digit: 3 * 8^0 = 3 * 1 = 3
    - second digit: 3 * 8^1 = 3 * 8 = 24
    - first digit: 2 * 8^2 = 2 * 64 = 128
    - sum = 155 (decimal representation)

Data Structures:
- split input string into array of characters, reverse

Algorithm:
- class `Octal`
  - constructor
    - input: string representing octal number
    - assign `number` parameter
  
    - method `isValidOctal`
      - return false if number property contains anything other than 0-7

    - method `toDecimal`
      - if instance's number property isn't a valid octal, return 0
      - split number (string) into array of digits
      - reverse array and coerce string elements to numbers
      - declare sum, initialize to 0
      - iterate through array
        - multiply current element by 8 ^ i, add to sum
      - return sum
*/

class Octal {
  constructor(str) {
    this.number = str;
  }

  isValidOctal() {
    return this.number.split('').every(char => '01234567'.includes(char));
  }

  toDecimal() {
    if (!this.isValidOctal()) return 0;

    let reversedDigits = this.number.split('').map(num => Number(num)).reverse();
    let decimalSum = 0;

    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = reversedDigits[i];
      decimalSum += (digit * (8 ** i));
    }

    return decimalSum;
  }
}

module.exports = Octal;