/*
Problem: Write a program that, given a word, computes the Scrabble score for that word.

Examples/Test Cases:
- both instance and `static` score methods
- no exceptions thrown by methods
- add guard clause to catch null/undefined
- case-insensitive

Data Structures:
- word: array of letters (strings)
- scores: object with keys representing letters, values representing points

Algorithm:

- define `Scrabble` class
  - constructor
    - input: word (string)
    - store argument as `word` property on instance
  
  - static `points` property pointing to object
    - 'aeioulnrst': 1
    - 'dg': 2
    - 'bcmp': 3
    - 'fhvwy': 4
    - 'k': 5
    - 'jx': 8
    - 'qz': 10

  - instance `score` method
    - guard clause: if word is null or undefined, return 0
    - coerce word to lowercase and split into aray of characters
    - declare `sum`, initialize to 0
    - iterate through array of characters
      - assign current character to `letter`
      - iterate through keys of static `points` property
        - if current key includes `letter`, add `Scrabble.points[letter]` to sum
        - this will exclude non-alphabetic characters without needing to filter the input

  - static `score` method
    - input: word (string)
    - call instance score method
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static points = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10
  }

  static score(word) {
    return (new Scrabble(word)).score();
  }

  score() {
    if (!this.word) return 0;

    let letters = this.word.toLowerCase().split('');
    let sum = 0;

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];

      for (let category in Scrabble.points) {
        if (category.includes(letter)) {
          let newPoints = Scrabble.points[category];
          sum += newPoints;
        }
      }
    }

    return sum;
  }
}

module.exports = Scrabble;