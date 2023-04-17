/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxValue = Math.max(...candies);
    let res = [];
    for(let i = 0 ; i < candies.length ; i++){
        if(candies[i] + extraCandies >= maxValue) res.push(true);
        else res.push(false);
    }
    return res;
};