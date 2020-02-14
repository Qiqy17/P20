/**
 * Created by webturing on 2020/2/13.
 */
let c = [1, 2, 3, 4]
let a = [0, 0, 0, 0];
let b = [0, 0, 0, 0];


function dfs(k) {
    if (k == 4) {
        var ans = " ";
        for (let i = 0; i < 4; i++) {
            ans += a[i];
        }
        if (a[0] + a[1] == a[2] + a[3])
            console.log(ans);
        return;
    }
    for (let i = 0; i < 4; i++) {
        if (b[i])continue;//
        a[k] = c[i];
        b[i] = 1;
        dfs(k + 1);
        b[i] = 0;
    }

}
dfs(0);




