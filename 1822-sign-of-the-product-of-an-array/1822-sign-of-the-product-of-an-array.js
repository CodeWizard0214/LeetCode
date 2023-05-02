/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let cnt = 0;
    let flag = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] < 0){
            cnt++;
        }
        if(nums[i] == 0){
            flag = 1;
        }
    }
    if(flag == 1) return 0
    else if(cnt%2 ==0 ) return 1;
    else return -1;
};