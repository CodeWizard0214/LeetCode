/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    let n = stoneValue.length;
    let res = [];
    for(let i = 0 ; i <= n ; i ++){
        res[i] = [];
    }
    res[n][0] = [0,0];
    res[n][1] = [0,0];
    for(let i = n-1; i >= 0 ; i --){
        for(let t = 0 ; t < 2 ; t ++){
            let s = 0;
            for(let j = i ; j < n && j-i < 3 ; j ++){
                s += stoneValue[j];
                let v = s+res[j+1][1-t][t];
                if(res[i][t] === undefined || res[i][t][t] < v){
                    if(res[i][t] === undefined) res[i][t] = [];
                    res[i][t][t] = v;
                    res[i][t][1-t] = res[j+1][1-t][1-t];
                }
            }
        }
    }
    if(res[0][0][0] > res[0][0][1]) return "Alice";
    if(res[0][0][1] > res[0][0][0]) return "Bob";
    if(res[0][0][0] === res[0][0][1]) return "Tie";
    
};