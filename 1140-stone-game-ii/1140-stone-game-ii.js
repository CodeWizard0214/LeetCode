function stoneGameII(piles) {
    const n = piles.length;
    const memo = {}; // memoized results

    const f = (p, i, m) => {
        if (i === n) {
            return 0;
        }

        const key = `${p}-${i}-${m}`;
        if (memo[key] !== undefined) {
            return memo[key];
        }

        let res = p === 1 ? Infinity : -Infinity;
        let s = 0;
        for (let x = 1; x <= Math.min(2 * m, n - i); x++) {
            s += piles[i + x - 1];
            if (p === 0) {
                res = Math.max(res, s + f(1, i + x, Math.max(m, x)));
            } else {
                res = Math.min(res, f(0, i + x, Math.max(m, x)));
            }
        }

        memo[key] = res;
        return res;
    };

    return f(0, 0, 1);
}