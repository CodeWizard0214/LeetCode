/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res1 = [];
    let res2 = [];
    let res = [];
    for(let i = 0 ; i < nums1.length; i++){
        if(!nums2.includes(nums1[i])){
            res1.push(nums1[i])
        }
    }
    for(let i = 0 ; i < nums2.length; i++){
        if(!nums1.includes(nums2[i])){
            res2.push(nums2[i])
        }
    }
    let mySet1 = new Set(res1);
    let uniqueArray1 = Array.from(mySet1);
    let mySet2 = new Set(res2);
    let uniqueArray2 = Array.from(mySet2);
    
    res.push(uniqueArray1);
    res.push(uniqueArray2);
    return res;
};