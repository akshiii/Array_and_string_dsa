let arr = [1, 2, 2, 3, 3, 5, 1, 2, 6, 1, 2, 4];

function removeDuplicates(arr) {
  let obj = {};
  arr.filter((value) => {
    obj[value] = true;
  });
  console.log(Object.keys(obj));
}
removeDuplicates(arr);
