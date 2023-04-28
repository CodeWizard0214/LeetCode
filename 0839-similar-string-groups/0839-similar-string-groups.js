function dfs(node, adj, visit) {
    visit[node] = true;
    for (let neighbor of adj[node]) {
        if (!visit[neighbor]) {
            dfs(neighbor, adj, visit);
        }
    }
}

function isSimilar(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diff++;
        }
    }
    return diff == 0 || diff == 2;
}

function numSimilarGroups(strs) {
    let n = strs.length;
    let adj = new Array(n).fill().map(() => []);
    // Form the required graph from the given strings array.
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    let visit = new Array(n).fill(false);
    let count = 0;
    // Count the number of connected components.
    for (let i = 0; i < n; i++) {
        if (!visit[i]) {
            dfs(i, adj, visit);
            count++;
        }
    }

    return count;
}