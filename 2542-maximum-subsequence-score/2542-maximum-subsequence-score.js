/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let nums = [], n = nums1.length;
    for(let i = 0 ; i < n ; i ++) nums.push(i);
    nums.sort((a,b)=> nums2[b]-nums2[a]);
    let result = 0, sum = 0, sub = [];
    
    function find_position(a){
        let st = 0 , en = sub.length;
        while(en > st){
            let mid = Math.floor((st+en)/2);
            if(sub[mid] > a) st = mid + 1;
            else en = mid;
        }
        return en;
    }
    
    for(let i = 0 ; i < n ; i ++){
        let p = find_position(nums1[nums[i]]);
        sub.splice(p,0,nums1[nums[i]]);
        sum +=nums1[nums[i]];
        if(sub.length > k) sum -= sub.pop();
        if(sub.length === k && result < sum * nums2[nums[i]])
            result = sum * nums2[nums[i]];
    }
    return result ;
};