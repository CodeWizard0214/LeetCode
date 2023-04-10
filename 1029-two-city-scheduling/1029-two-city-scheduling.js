/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
     var diff = [];
    for(var i = 0 ; i < costs.length; i++){
        diff.push([costs[i][0] - costs[i][1], i]);
    }
    diff.sort((a, b) => a[0]-b[0]);
    var res = 0;
    for(var i = 0 ; i < costs.length; i++){
        if(i < costs.length/2) res += costs[diff[i][1]][0];
        else res += costs[diff[i][1]][1];
    }
    return res;
};