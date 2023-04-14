/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        // Ignore negative numbers and numbers that are out of range
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i]-1] !== nums[i]) {
            // Swap nums[i] with the number in its corresponding bucket
            const temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // Step 2: Iterate over the buckets and return the index of the first empty bucket
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            return i+1;
        }
    }
    
    // If all numbers are present, the smallest missing positive integer is one greater than the maximum number
    return nums.length+1;
};