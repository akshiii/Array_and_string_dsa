let str = "wowsowod";

function removeDuplicates(str) {
  let arr = str.split("");
  let set = new Set();
  for (let a = 0; a < arr.length; a++) {
    if (set.has(arr[a])) {
    } else set.add(arr[a]);
  }
  let newArr = [];
  for (const item of set.values()) {
    newArr.push(item);
  }
  console.log(newArr.join(""));
}
removeDuplicates(str);
