// find second largest number in array.

const arr = [1, 5, 2, 8, 15, 9];

function findSecondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

const result = findSecondLargestNumber(arr);
console.log(result); // Output: 9
