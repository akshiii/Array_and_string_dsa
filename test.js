function findMinScore(input1, input2, input3) {
  let newArr = new Array(input2).fill(0);

  for (let a = 0; a < input1; a++) {
    //3
    let value = input3[a];
    for (let b = 0; b < input2; b++) {
      //5
      newArr[b] = newArr[b] + value[b];
    }
  }

  let smallIndex = 0;
  for (let c = 0; c < newArr.length; c++) {
    if (newArr[c] < newArr[smallIndex]) {
      smallIndex = c;
    }
  }

  console.log("smallIndex: ", smallIndex);

  let finalArr = new Array(input1).fill(0);
  for (let a = 0; a < input1; a++) {
    //3
    let value = input3[a];
    for (let b = 0; b < input2; b++) {
      //5
      if (b != smallIndex) {
        finalArr[a] = finalArr[a] + value[b];
      }
    }
  }

  console.log("sum: ", finalArr);
}

findMinScore(3, 5, [
  [7, 4, 2, 8, 2],
  [3, 4, 1, 2, 5],
  [4, 5, 7, 8, 9],
]);
//3 students, 5 subjects and their scores, eliminate the lowest marks that a subject recorded and then return the total marks for all students ( excluding that 1 subject)
