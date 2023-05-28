/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b); // sort the cuts in ascending order
    cuts.unshift(0); // add 0 at the beginning of cuts
    cuts.push(n); // add n at the end of cuts
    const len = cuts.length;
    const dp = new Array(len).fill().map(() => new Array(len).fill(0)); // create a 2D array for dynamic programming
    for (let k = 2; k < len; k++) { // iterate over the subproblems of size k
        for (let i = 0; i < len - k; i++) { // iterate over the starting points of the subproblems
            const j = i + k; // calculate the ending point of the subproblem
            dp[i][j] = Number.MAX_SAFE_INTEGER; // initialize the value of the subproblem to the biggest number
            for (let m = i + 1; m < j; m++) { // iterate over the possible positions to cut the stick inside the subproblem
                dp[i][j] = Math.min(dp[i][j], dp[i][m] + dp[m][j] + cuts[j] - cuts[i]); // update the value of the subproblem
            }
        }
    }
    return dp[0][len - 1]; // return the value of the original problem
};