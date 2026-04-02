let arr = [5, 1, 2, 3, 9, 6];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(arr, 15)); //Output : -1
console.log(linearSearch(arr, 9)); //Output : 4
