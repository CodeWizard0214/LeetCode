function maxLevelSum(root) {
    let maxSum = -Infinity;
    let ans = 0, level = 0;

    let q = [];
    q.push(root);

    while (q.length > 0) {
        level++;
        let sumAtCurrentLevel = 0;
        
        // Iterate over all the nodes in the current level.
        for (let sz = q.length; sz > 0; --sz) {
            let node = q.shift();
            sumAtCurrentLevel += node.val;

            if (node.left != null) {
                q.push(node.left);
            }
            if (node.right != null) {
                q.push(node.right);
            }
        }

        if (maxSum < sumAtCurrentLevel) {
            maxSum = sumAtCurrentLevel;
            ans = level;
        }
    }

    return ans;
}