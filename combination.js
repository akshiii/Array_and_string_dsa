//check if pair with given sum is present
let arr = [2, 3, 1, 6];

function sumOfPair(arr, sum) {
  let set = new Set();
  for (let value of arr) {
    if (set.has(sum - value)) {
      console.log(set);
      return true;
    } else {
      set.add(value);
    }
  }

  console.log(set);
  return false;
}
console.log(sumOfPair(arr, 3));
