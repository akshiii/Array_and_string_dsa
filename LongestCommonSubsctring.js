let s1 = "javascript";
let s2 = "java";

function findLongestCommonSubstring(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;
  let dp = Array(n1 + 1)
    .fill(0)
    .map(() => Array(n2 + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen;
}

console.log("Ans: ", findLongestCommonSubstring(s1, s2));

//not solved yet
