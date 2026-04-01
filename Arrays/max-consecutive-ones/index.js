function maxConsecutiveOnes(arr) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    } else {
      maxCount = maxCount > count ? maxCount : count;
      count = 0;
    }
  }
  return maxCount > count ? maxCount : count;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];

const res = maxConsecutiveOnesIarr(arr);
console.log(res); // Output: 3
