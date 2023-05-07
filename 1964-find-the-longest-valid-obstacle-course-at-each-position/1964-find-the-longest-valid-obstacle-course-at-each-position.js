/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const n = obstacles.length;
  const ans = new Array(n).fill(1);
  const stack = [obstacles[0]];
  
  for (let i = 1; i < n; i++) {
    if (obstacles[i] >= stack[stack.length - 1]) {
      stack.push(obstacles[i]);
      ans[i] = stack.length;
    } else {
      let left = 0, right = stack.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (stack[mid] <= obstacles[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      stack[left] = obstacles[i];
      ans[i] = left + 1;
    }
  }
  
  return ans;
};