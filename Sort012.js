let sort012 = (arr) => {
  //your code here

  let zero = [];
  let one = [];
  let two = [];
  arr.filter((value) => {
    if (value == 0) {
      zero.push(value);
    } else if (value === 1) {
      one.push(value);
    } else {
      two.push(value);
    }
  });

  let newArr = [...zero, ...one, ...two];

  console.log(newArr);
};

let arr = [0, 2, 1, 0, 1, 2, 1, 2, 0];

sort012(arr);
