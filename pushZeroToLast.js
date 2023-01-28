let arr = [0, 0, 0, 0, 3, 0, 5, 0, 4];

function removeDuplicates(arr) {
  let count = 0;
  let newArr = arr.filter((value) => {
    if (value === 0) count++;
    return value !== 0;
  });

  console.log([...newArr, ...new Array(count).fill(0)]);
}
removeDuplicates(arr);
