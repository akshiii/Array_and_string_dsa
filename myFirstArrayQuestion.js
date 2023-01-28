let arr = [1, 2, 3, 4, 5];

function rotateOnce(arr) {
  let temp = arr.pop();
  arr.unshift(temp);
  console.log(arr);
}

rotateOnce(arr);
