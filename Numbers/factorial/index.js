function facto(n) {
  if (n == 1) return 1;
  return n * facto(n - 1);
}

const res = facto(5);
console.log(res); // Output: 120
