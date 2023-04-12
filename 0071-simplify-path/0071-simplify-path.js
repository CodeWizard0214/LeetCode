/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArray = path.split("/");
    let res = [];
    for(let i = 0 ; i < pathArray.length; i++){
        if(pathArray[i] == "." || pathArray[i] == ""){
            continue;
        }else if(pathArray[i] == ".."){
            res.pop();
        }else {
            res.push(pathArray[i]);
        }
    }
    return "/" + res.join("/");
};