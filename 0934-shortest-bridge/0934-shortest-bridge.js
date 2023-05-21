function shortestBridge(grid) {
    const n = grid.length;
    const ix = [1, 0, -1, 0];
    const iy = [0, 1, 0, -1];

    function dfs(i, j, k, q) {
        if (i >= n || i < 0 || j >= n || j < 0)
            return;

        if (grid[i][j] === k) {
            grid[i][j] = q;
            for (let p = 0; p < 4; p++)
                dfs(i + ix[p], j + iy[p], k, q);
        }
    };

    // coloring the two islands
    let col = 2;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j] === 1) {
                col++; 
                dfs(i, j, 1, col);
            }

    // expanding the shorelines of one island until hits the other (BFS)
    let result = Number.MAX_SAFE_INTEGER;
    for (let k = 3; k <= col; k++) { // find all shorelines of different islands
        let visited = new Set();
        let q = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === k) {
                    q.push([i, j, 0]); // [row, col, distance to shoreline] 
                    visited.add(`${i},${j}`);
                }
            }
        }

        while (q.length > 0) {
            const [i, j, d] = q.shift();
            for (let p = 0; p < 4; p++) {
                const x = i + ix[p];
                const y = j + iy[p];
                const key = `${x},${y}`;
                if (x >= 0 && x < n && y >= 0 && y < n && !visited.has(key)) {
                    visited.add(key);
                    if (grid[x][y] === 0)
                        q.push([x, y, d + 1]);
                    else if (grid[x][y] !== k)
                        result = Math.min(result, d);
                }
            }
        }
    }

    return result;
};