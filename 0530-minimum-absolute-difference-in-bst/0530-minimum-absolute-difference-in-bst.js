var inorderTraversal = function(node, inorderNodes) {
    if (node == null) {
        return;
    }

    inorderTraversal(node.left, inorderNodes);

    // Store the nodes in the list.
    inorderNodes.push(node.val);

    inorderTraversal(node.right, inorderNodes);
}

var getMinimumDifference = function(root) {
    // Initialize the variables
    const inorderNodes = [];

    inorderTraversal(root, inorderNodes);

    let minDifference = Infinity;
    // Find the difference between every two consecutive values in the list.
    for (let i = 1; i < inorderNodes.length; i++) {
        minDifference = Math.min(minDifference, inorderNodes[i] - inorderNodes[i - 1]);
    }

    return minDifference;
};