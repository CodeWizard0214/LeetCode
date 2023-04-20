/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let leftMost = [];
    let rightMost = [];
    let res = 0n;
    function DFS(node, id, depth){
        if(leftMost[depth] === undefined || id < leftMost[depth])
            leftMost[depth] = id;
        if(rightMost[depth] === undefined || id > rightMost[depth])
            rightMost[depth] = id;
        if(rightMost[depth] - leftMost[depth] + 1n > res)
            res = rightMost[depth] - leftMost[depth] + 1n;
        if(node.left !== null){
            DFS(node.left,id*2n+1n,depth+1)
        }
        if(node.right != null){
            DFS(node.right, id*2n+2n,depth+1)
        }
    }
    DFS(root,0n,0);
    return res;
};