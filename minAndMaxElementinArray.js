let getMinMax = (arr) => {
  //code here

  arr.sort((a, b) => {
    return a - b;
  });

  return [arr[0], arr[arr.length - 1]];
};

let arr = [1, 42, 66, 3, 100, 2, 0];
console.log(getMinMax(arr));
