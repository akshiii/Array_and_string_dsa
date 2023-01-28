var a = 2314;
// op -> 4132
console.log(reverseInterger(a));

function reverseInterger(num) {
  let temp = 0;
  while (num > 0) {
    temp = temp * 10 + (num % 10);
    console.log("temp: ", temp);
    num = Math.floor(num / 10);
  }
  return temp;
}
