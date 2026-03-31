const arr = [1, 5, 2, 8, 15, 9];

function findLargestNumber(arr) {
  let largest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

const largestNumber = findLargestNumber(arr);
console.log(largestNumber);
