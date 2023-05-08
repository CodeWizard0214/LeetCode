/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i]; // add element in primary diagonal
        if (i !== n - 1 - i) {
            sum += mat[i][n - 1 - i]; // add element in secondary diagonal
        }
    }
    return sum;
};