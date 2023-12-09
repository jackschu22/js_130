// [P] Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

  // An equilateral triangle has all three sides the same length.
  // An isosceles triangle has exactly two sides of the same length.
  // A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of 
// the lengths of any two sides must be greater than the length of the third side.
/*

[E]
- throw error if:
  - no size
  - negative sides
  - violate triangle equality (s1 + s2 > s3)
- `kind` method, returns type of triangle (string)

[D]
- Triangle class

[A]
- declare Triangle class
  - constructor takes 3 side lengths
    - if invalid side lengths, throw error
  - `isValid` method:
    - if sum of 2 side lengths < remaining side length, return false
      - test all three combinations
    - if negative side length, return false
  - `kind` method:
    - if s1 === s2 === s3, return 'equilateral'
    - if s1 === s2 && s1 !== s3, etc return `isosceles`
    - default: return `scalene`
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (this.isInvalid()) throw new Error('Invalid side lengths');
  }

  isInvalid() {
    let [ side1, side2, side3 ] = this.sides;

    if (this.sides.some(side => side <= 0)) return true;
    if (side1 + side2 <= side3) return true;
    if (side1 + side3 <= side2) return true;
    if (side2 + side3 <= side1) return true;

    return false;
  }

  kind() {
    let [ side1, side2, side3 ] = this.sides;

    if (side1 === side2 && side1 === side3) return 'equilateral';
    if (side1 === side2 || side1 === side3 || side2 === side3) return 'isosceles';
    
    return 'scalene';
  }
}

module.exports = Triangle;