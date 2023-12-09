/* JS130 Challenges: Easy 2: Point Mutations

[P] Write a program that can calculate the Hamming distance between two DNA strands.

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^    <-- Hamming Distance = 7

The Hamming distance is only defined for sequences of equal length. If you have two 
sequences of unequal length, you should compute the Hamming distance over the shorter length.

[E]

[D]

[A]
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparison) {
    let minLength = this.strand.length <= comparison.length ? this.strand.length : comparison.length;
    let differences = 0;

    for (let i = 0; i < minLength; i++) {
      if (this.strand[i] !== comparison[i]) {
        differences += 1;
      }
    }

    return differences;
  }
}

module.exports = DNA;