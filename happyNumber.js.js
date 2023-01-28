// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function happyNumber(num) {
  if (num === 1) {
    console.log("true");
    return true;
  } else if (num < 10) {
    console.log("false");
    return false;
  }

  let arr = [];
  let sum = 0;
  while (num !== 0) {
    let digit = num % 10;
    arr.push(digit);
    sum = sum + digit * digit;
    num = Math.floor(num / 10);
  }
  console.log("num is", sum);

  happyNumber(sum);
}
happyNumber(11);
