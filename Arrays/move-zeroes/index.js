const moveZeroes = function (nums) {
  let nonZeroIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndx]] = [nums[nonZeroIndx], nums[i]]; // change the position with
      nonZeroIndx++;
    }
  }
};

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output [1,3,12,0,0]
