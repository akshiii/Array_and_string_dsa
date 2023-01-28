let peakElement = (arr, n) => {
  //   let temp = 0;
  // let peak = [];

  let peak = 0;
  if (n <= 1) {
    return 0;
  }
  if (arr[n - 1] >= arr[n - 2]) {
    return n - 1;
  }
  for (let a = 0; a < arr.length; a++) {
    if (arr[a + 1] <= arr[a] && arr[a] >= arr[a - 1]) {
      return a;
    }
  }
};

let arr = [7, 10, 4, 3, 20, 28];
let arr1 = [3, 2, 1];

console.log(peakElement(arr1, arr1.length)); // give index of any one elements which are peak
