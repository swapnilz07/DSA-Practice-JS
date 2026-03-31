// reverse Integer

function reverseInteger(num) {
  let xCopy = num;
  num = Math.abs(num);

  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  let limit = 2 ** 31;

  if (rev < -limit || rev > limit) return 0;
  return xCopy < 0 ? -rev : rev;
}

const result = reverseInteger(12345);
console.log(result); //Output 54321
