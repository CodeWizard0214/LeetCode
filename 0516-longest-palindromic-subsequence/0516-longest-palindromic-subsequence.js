/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = Array.from(Array(n), () => new Array(n).fill(0));
    
    // initialize diagonal
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // fill dp table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    
    // length of longest palindromic subsequence
    return dp[0][n-1];
};