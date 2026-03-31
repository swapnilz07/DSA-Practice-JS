// Find the largest number in an array

const arr = [1, 5, 2, 8, 15, 9];

function findLargestNumber(arr) {
  let largest = -Infinity; //the smallest value
  for (let num of arr) {
    if (num > largest) {
      // If current number is bigger than stored largest
      largest = num; // Update largest
    }
  }
  return largest;
}

const result = findLargestNumber(arr);
console.log(result); // Output: 15
