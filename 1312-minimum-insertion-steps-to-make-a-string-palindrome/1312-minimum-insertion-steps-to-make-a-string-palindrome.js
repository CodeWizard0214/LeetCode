/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const n = s.length;
  // dp[i][j] stores the minimum number of steps required to make s[i...j] a palindrome
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));
  
  // base case: s[i...i] is already a palindrome (no steps required)
  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }
  
  // fill the dp table for substrings of length 2 to n
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        // no additional steps required to make s[i...j] a palindrome
        dp[i][j] = dp[i+1][j-1];
      } else {
        // either insert s[j] before s[i+1] or insert s[i] after s[j-1]
        dp[i][j] = 1 + Math.min(dp[i+1][j], dp[i][j-1]);
      }
    }
  }
  
  // the minimum number of steps required to make the entire string s a palindrome is equal to dp[0][n-1]
  return dp[0][n-1];
};