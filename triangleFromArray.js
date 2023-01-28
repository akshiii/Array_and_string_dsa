// Given an array of integers, we need to find out all possible ways construct non-degenerate triangle using array
// values as its sides. If no such triangle can be formed then return 0.

let arr = [5, 4, 3, 1, 2];
// Output : 3
// Explanation:
// Sides of possible triangle are
// (2 3 4), (3 4 5) and (2 4 5)

function getCominationsOfTraiangle(arr) {
  let counter = 0;
  for (let a = 0; a < arr.length; a++) {}
}

// console.log(getCominationsOfTraiangle("No of comb. :", arr));

function isPossibleTriangle(arr, N) {
  // If number of elements are
  // less than 3, then no
  // triangle is possible
  if (N < 3) return false;

  // first sort the array
  arr.sort();

  // loop for all 3
  // consecutive triplets
  let counter = 0;
  for (let i = 0; i < N; i++) {
    // If triplet satisfies
    // triangle condition, break
    if (arr[i] + arr[i + 1] > arr[i + 2]) {
      console.log(
        "Combi: (",
        arr[i] + "," + arr[i + 1] + "," + arr[i + 2] + ")"
      );
      counter++;
    }
  }
  return counter;
}
console.log("No of comb. :", isPossibleTriangle(arr, arr.length));
