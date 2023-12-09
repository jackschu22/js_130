/*
Problem: Write a program that takes a word and a list of possible anagrams and selects the correct 
sublist that contains the anagrams of the word.
- Input: string, array of strings
- Output: array of strings
=> restructure as class

Examples/Test Cases:
- `match` method compares list of strings to anagram
- anagrams are case-insensitive

Algorithm:
- `Anagram` class
  - constructor
    - initialize `word` property
    - initialize sorted chars of `word` property
  - `isAnagram` method
    - input: word to test
    - return true if input word is anagram of `word` property of instance
      - case-insensitive (`toLowerCase`)
  - `match` method
    - input: array of strings to test
    - return filtered input array
      - callback returns truthy if input is anagram of word property of instance
*/

class Anagram {
  constructor(word) {
    this.word = word;
    this.sortedChars = word.toLowerCase().split('').sort().join('');
  }

  isAnagram(testWord) {
    if (this.word.toLowerCase() === testWord.toLowerCase()) return false;
    return this.sortedChars === testWord.toLowerCase().split('').sort().join('');
  }

  match(list) {
    return list.filter(word => this.isAnagram(word));
  }
}

module.exports = Anagram;