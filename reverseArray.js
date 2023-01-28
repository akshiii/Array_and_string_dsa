let reverseArray = (str) => {
  let n = str.length - 1;
  let mid = (0 + n) / 2;
  for (let a = 0; a <= n; a++) {
    let temp = str[n - a];
    str[n - a] = str[a];
    str[a] = temp;

    if (a == mid) {
      break;
    }
  }

  console.log("after reveerse == ", str);
};

reverseArray([1, 2, 3, 4, 5]);
