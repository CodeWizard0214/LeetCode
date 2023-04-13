/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let pushedArray = [];
    let cnt = 0;
    for(let i = 0 ; i < pushed.length; i++){
        pushedArray.push(pushed[i]);
        while (pushedArray.length > 0 && pushedArray[pushedArray.length - 1] === popped[cnt]) {
              pushedArray.pop();
              cnt++;
        }
    }
    if(pushedArray.length === 0) return true;
    else return false;
};