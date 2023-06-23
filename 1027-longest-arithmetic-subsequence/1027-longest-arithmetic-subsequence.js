/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    let maxLength = 2;
    const dp = Array.from({ length: n }, () => new Map());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const count = (dp[j].has(diff) ? dp[j].get(diff) : 1) + 1;
            dp[i].set(diff, count);
            maxLength = Math.max(maxLength, count);
        }
    }

    return maxLength;
};