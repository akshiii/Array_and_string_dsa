let str = "abab";
// o/p : bb : 2

let str1 = "abcbc";
//

function myFunction(str) {
  let arr = str.split("");
  console.log("arr:", arr);
  function replaceFu(first, second) {
    if ((first == "a" && second == "b") || (first == "b" && second == "a")) {
      return "c";
    } else if (
      (first == "b" && second == "c") ||
      (first == "c" && second == "b")
    ) {
      return "a";
    } else if (
      (first == "a" && second == "c") ||
      (first == "c" && second == "a")
    ) {
      return "b";
    }
  }

  let counter = 0;
  for (let t = 0; t < arr.length; t++) {
    if (arr[t] != arr[t + 1]) {
      console.log("new value ", arr);
      newValue = replaceFu(arr[t], arr[t + 1]);
      arr[t] = newValue;
      arr.splice(t + 1, 1);
      counter++;
      console.log("new value ", arr);
    } else {
      //   t++;
    }
  }

  console.log("Total times:", counter);
  return arr.join("");
}

console.log(myFunction("cccc"));
