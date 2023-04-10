/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var openS = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            openS.push(s[i]);
        }else if(s[i] == "}"){
            var char = openS.pop();
            if(char != "{") return false;
        }else if(s[i] == "]"){
            var char = openS.pop();
            if(char != "[") return false;
        }else if(s[i] == ")"){
            var char = openS.pop();
            if(char != "(") return false;
        }
    }
    return !openS.length
};