const num = 5;

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1); // sum(4) + 5 = 10 + 5 = 15
}

const result = sum(num);
console.log(result);
