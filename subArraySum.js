// find a continuous sub-array which adds to a given number sum and return the left and right index
// of that subarray.
let subArraySum = (arr, sum) => {
  //code here

  let temp = 0;
  for (let a = 0; a < arr.length; a++) {
    temp = temp + arr[a];
    if (temp > sum) {
      temp = 0;
    }
  }

  return [];
};

let arr = [1, 2, 3, 6, 8, 4, 8, 1];
console.log(subArraySum(arr, 11));
