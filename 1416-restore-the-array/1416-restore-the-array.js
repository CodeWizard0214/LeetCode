/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
 const MOD = 1000000007;
    let stringK = k.toString();
    let res = [];
    for(let i = 0 ; i <= s.length ; i ++){
        res[i] = 0;
    }
    res[0] = 1;
    for(let i = 1 ; i <= s.length ; i ++ ){
        let subString = '';
        for( let j = i ; j > 0 ; j -- ){
            subString = s[j-1]+subString;
            if(i-j+1 > stringK.length) break ;
            if(s[j-1] == '0') continue ;
            if(Number(subString) > k) break ;
            res[i] += res[j-1];
            res[i] %= MOD;
        }
    }
    return res[s.length];

};