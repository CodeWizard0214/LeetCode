/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    
    const backtrack = (start) => {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        
        const seen = new Set();
        for (let i = start; i < nums.length; i++) {
            if (seen.has(nums[i])) continue;
            seen.add(nums[i]);
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };
    
    backtrack(0);
    return result;
};