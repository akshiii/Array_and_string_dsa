function solution(balances, requests) {
  console.log("hi");
  for (let a = 0; a < requests; a++) {
    console.log("wow");
    let req = requests[a];
    let reqArr = req.split(" ");
    console.log(reqArr);
    let accNumber = reqArr[1];
    console.log("accNumber :", accNumber, "reqArr: ", reqArr);
    if (reqArr[0] == "deposit") {
      balances[accNumber - 1] = balances[accNumber - 1] + reqArr[2];
    } else if (reqArr[0] == "transfer") {
      balances[accNumber - 1] = balances[accNumber - 1] - reqArr[3];
      balances[reqArr[2] - 1] = balances[reqArr[2] - 1] + reqArr[3];
    } else if (reqArr[0] == "withdraw") {
      balances[accNumber - 1] = balances[accNumber - 1] - reqArr[2];
    }
  }
  return balances;
}

console.log(
  solution(
    [10, 100, 20, 50, 30],
    ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]
  )
);
