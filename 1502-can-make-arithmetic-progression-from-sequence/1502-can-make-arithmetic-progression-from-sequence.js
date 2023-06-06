/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let newArray = arr.sort((a, b) => a - b);
    let diff = newArray[1] - newArray[0];
    for(let i = 1 ; i < newArray.length ; i++){
        if(newArray[i]-newArray[i-1] != diff) return false;
    }
    return true;
};