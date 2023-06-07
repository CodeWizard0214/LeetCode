/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0;
    while (a > 0 || b > 0 || c > 0) {
        const bitC = c & 1, bitA = a & 1, bitB = b & 1;
        if (bitC === 1) {
            if (bitA + bitB === 0) flips++;
        } else {
            flips += bitA + bitB;
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return flips;
};