let reverseString = (str) => {
  let arr = str.split("");
  let n = arr.length - 1;
  let mid = Math.floor(n / 2);

  for (let a = 0; a <= mid; a++) {
    let temp = arr[n - a];
    arr[n - a] = arr[a];
    arr[a] = temp;
  }

  console.log("after reveerse == ", arr.join(""));
};

reverseString("kpower");
