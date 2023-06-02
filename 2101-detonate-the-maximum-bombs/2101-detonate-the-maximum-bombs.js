/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let n = bombs.length, con = [], cnt = [];
    for(let i = 0 ; i < n ; i ++){
        con[i] = [];
        cnt[i] = 0;
        for(let j = 0 ; j < n ; j ++){
            if(i === j ) continue ;
            let dx = bombs[i][0]-bombs[j][0];
            let dy = bombs[i][1]-bombs[j][1];
            if(dx*dx+dy*dy <= bombs[i][2]*bombs[i][2])
                con[i][cnt[i]++] = j;
        }
    }
    let root = [], result = 0;
    for(let i = 0 ; i < n ; i ++){
        let qu = [], vis = [], count = 1;
        qu.push(i);
        vis[i] = 1;
        while(qu.length > 0){
            let v = qu.shift();
            for(let i = 0 ; i < cnt[v] ; i ++){
                let w = con[v][i];
                if(vis[w]) continue ;
                vis[w] = 1;
                count ++;
                qu.push(w);
            }
        }
        if(result < count) result = count
    }
    return result;
};