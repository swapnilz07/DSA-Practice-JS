function missingNumber(arr) {
  const length = arr.length;
  const sum = (length * (length + 1)) / 2;
  let actualSum = 0;

  for (const num of arr) {
    actualSum = actualSum + num;
  }

  return sum - actualSum;
}

const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const res = missingNumber(arr);
console.log(res); // Output: 8
