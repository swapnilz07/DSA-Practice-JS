function pOfTwo(n) {
  if (n == 1) return true;
  if (n < 1 || n % 2 != 0) return false;

  return pOfTwo(n / 2);
}

// console.log(pOfTwo(3)); // false
// console.log(pOfTwo(16)); // true

// ------------------------------------------

// without using loop/recursion
// using bitwise & operator

function pOfTwoUsingBitwiseAndOperator(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// console.log(pOfTwoUsingBitwiseAndOperator(3)); // false
// console.log(pOfTwoUsingBitwiseAndOperator(8)); // true

// explaination :
// n > 0 evaluate to true
// (n & (n - 1)) === 0 -> 3 & 2 === 0

//  binary of 3 : 0011
//  binary of 2 : 0010
//               _____
//               0010 -> 2 (binary of 2);

// so 2 === 0 is false, so return false

// first condition true and second is false so true and false is false so return false
// so 3 is not a power of two

// ------------------------------------------

// n = 8; n > 0 which is true
// (n & (n - 1)) === 0 -> 8 & 7 ===     0
//  binary of 8 : 1000
//  binary of 7 : 0111
//               ______
//               0000 -> 0 (binary of 0)

// so 0 === 0 is true, so return true.
// first condition true and second is true so true and true is true so return true.
// so 8 is a power of two.

// ------------------------------------------
