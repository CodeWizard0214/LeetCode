/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    let res = [];
    for(let i = 0 ; i <= n ; i ++) res[i] = 0;
    res[0] = 1;
    let sum = 1;
    let result = 0;
    for(let i = 1 ; i <= n ; i ++){
        if(i > maxPts) sum -= res[i-maxPts-1];
        if(sum < 0) sum = 0;
        res[i] = sum/maxPts;
        if(i < k) sum+=res[i];
    }
    for(let i = k ; i <= n ; i ++) result += res[i];
    if(result > 1) result = 1;
    return result.toFixed(5);
};