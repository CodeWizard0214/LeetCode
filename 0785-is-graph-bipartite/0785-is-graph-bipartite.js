var isBipartite = function(graph) {
    let n = graph.length, con = [], cnt = [];
    for(let i = 0 ; i < n; i++){
        cnt[i] = 0;
        con[i] = [];
        for(let j = 0 ; j < graph[i].length ; j++){
            let v = graph[i][j];
            con[i][cnt[i]++] = v;
        }
    }
    let vis = [];
    for(let i = 0 ; i < n ; i ++){
        if(vis[i] !== undefined) continue ;
        vis[i] = 0;
        let qu = [];
        qu.push(i);
        while(qu.length > 0){
            let v = qu.shift();
            for(let j = 0 ; j < cnt[v] ; j ++){
                let w = con[v][j];
                if(vis[w] !== undefined && 1-vis[v] !== vis[w]) {
                    return false;
                }
                if(vis[w] === undefined){
                    vis[w] = 1-vis[v];
                    qu.push(w);
                }
            }
        }
    }
    return true;
};