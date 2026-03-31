// check the given number is Palindrome or not

const isPalindrome = function (x) {
  if (x < 0) return false;

  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  return rev === xCopy;
};

const result = isPalindrome(121);
console.log(result); // Output: true
