const prompt = require('prompt-sync')();

function checkPalindrome(number) {
  const length = number.length;
  for (let i = 0; i < length / 2; i++) {
      if (number[i] !== number[length - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}
const number = prompt('Enter a number: ');
const value = checkPalindrome(number);
console.log(value);

