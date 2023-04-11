/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let arr = s.split("");
    let res = [];
  for (let i = 0; i < s.length; i++) {
      
    if (arr[i] === "*") {
        res.pop();
    }else{
        res.push(arr[i]);
    }
  }
  return res.join("");
};