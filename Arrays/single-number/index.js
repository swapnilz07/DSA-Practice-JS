const arr = [4, 1, 2, 1, 2];

function singleNumber(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == 1) {
      return arr[i];
    }
  }
}

// another approach using bitwise x-or operator.

function singleNumberUsingXOR(arr) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i]; //it will remove all the duplicates.
  }
  return xor; // it will give single value.
}
