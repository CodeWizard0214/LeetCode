function countGoodStrings(low, high, zero, one) {
    const dp = [1]; // dp[i] records the number of good strings of length i
    for (let i = 1; i <= high; i++) {
        dp.push(-1);
    }
    const MOD = 1e9 + 7;

    // DFS to compute the number of good strings of a given length
    function dfs(end) {
        if (dp[end] !== -1) {
            return dp[end];
        }
        let count = 0;
        if (end >= zero) {
            count += dfs(end - zero);
        }
        if (end >= one) {
            count += dfs(end - one);
        }
        dp[end] = count % MOD;
        return dp[end];
    }

    // Add up the number of strings with each valid length [low ~ high].
    let answer = 0;
    for (let i = low; i <= high; i++) {
        answer += dfs(i);
    }

    return answer % MOD;
}