function longestZigZag(root) {
  if (!root) return 0;

  let max_length = 0;

  function dfs(node, direction, length) {
    if (!node) return;
    
    max_length = Math.max(max_length, length);

    if (direction === "left") {
      dfs(node.right, "right", length + 1);
      dfs(node.left, "left", 1);
    } else {
      dfs(node.left, "left", length + 1);
      dfs(node.right, "right", 1);
    }
  }

  dfs(root.left, "left", 1);
  dfs(root.right, "right", 1);

  return max_length;
}
