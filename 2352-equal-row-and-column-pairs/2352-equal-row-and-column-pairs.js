/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
  const n = grid.length;
  // loop through each row and column of the grid
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // check if current row and column are equal
      if (JSON.stringify(grid[i]) === JSON.stringify(grid.map((r) => r[j]))) {
        count++;
      }
    }
  }
  return count;
};