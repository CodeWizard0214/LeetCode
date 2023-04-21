/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(minProfit + 1).fill(0));
  // dp[i][j] stores the number of schemes that use <= i members
  // and generate at least j profits
  dp[0][0] = 1;
  const len = group.length;
  for (let k = 0; k < len; k++) {
    const g = group[k];
    const p = profit[k];
    for (let i = n; i >= g; i--) {
      for (let j = minProfit; j >= 0; j--) {
        dp[i][j] = (dp[i][j] + dp[i - g][Math.max(0, j - p)]) % MOD;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = (ans + dp[i][minProfit]) % MOD;
  }
  return ans;
};