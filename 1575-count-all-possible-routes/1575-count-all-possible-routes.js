var countRoutes = function(locations, start, finish, fuel) {
    const MOD = 1e9 + 7;
    const n = locations.length;
    const dp = new Array(n).fill(null).map(() => new Array(fuel + 1).fill(0));
    // dp[i][fuel] - number of ways to get to city i with fuel units of fuel.

    dp[start][fuel] = 1;
    for (let f = fuel; f >= 0; f--) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) continue;
                const cost = Math.abs(locations[i] - locations[j]);
                if (f >= cost) {
                    dp[j][f - cost] = (dp[j][f - cost] + dp[i][f]) % MOD;
                }
            }
        }
    }
    let ans = 0;
    for (let f = 0; f <= fuel; f++) {
        ans = (ans + dp[finish][f]) % MOD;
    }
    return ans;
};