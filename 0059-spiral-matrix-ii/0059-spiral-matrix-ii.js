function generateMatrix(n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  let num = 1;
  
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;
    
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;
    
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }
    
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }
  
  return matrix;
}