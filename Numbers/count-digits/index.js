// Count the number of digits in a given integer

function countDigits(num) {
  num = Math.abs(num); // It converts the negative number to positive
  if (num === 0) return 1; // 0 has 1 digit

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(countDigits(12345)); // 5
console.log(countDigits(-987)); // 3
console.log(countDigits(0)); // 1

// Iteration 1: num = Math.floor(12345/10) = Math.floor(1234.5) = 1234, count=1
// Iteration 2: num = Math.floor(1234/10) = Math.floor(123.4) = 123, count=2
// Iteration 3: num = Math.floor(123/10) = Math.floor(12.3) = 12, count=3
// Iteration 4: num = Math.floor(12/10) = Math.floor(1.2) = 1, count=4
// Iteration 5: num = Math.floor(1/10) = Math.floor(0.1) = 0, count=5, loop ends bcz condition(num > 0) is fakse
