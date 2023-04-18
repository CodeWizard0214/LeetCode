/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = [];
    let  = 0 ;
    if(word1.length < word1.length){
        for(i = 0 ; i< word1.length ; i++){
            res.push(word1[i]);
            res.push(word2[i]);
        }
        for(i = word1.length; i < word2.length; i++){
            res.push(word2[i]);
        }
    }
    else{
        for(i = 0 ; i< word2.length ; i++){
            res.push(word1[i]);
            res.push(word2[i]);
        }
        for(i = word2.length; i < word1.length; i++){
            res.push(word1[i]);
        }
    }
    return res.join("");
};