const arr = [5, 4, 2, 1, 10];

// Recursive approach : all Numbers from n to 0
function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

const result1 = sum(arr.length - 1);
console.log(result1);

// Recursive aproach : sum of odd numbers in an array
function sumOfOddNumbers(n) {
  let isOdd = arr[n] % 2 !== 0;

  if (n == 0) return isOdd ? arr[n] : 0;
  return (isOdd ? arr[n] : 0) + sumOfOddNumbers(n - 1);
}

const result2 = sumOfOddNumbers(arr.length - 1);
console.log(result2);
