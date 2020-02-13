/**
 * Created by webturing on 2020/2/13.
 */
let a = [1, 2, 3, 4];
let b = [0, 0, 0, 0];


function dfs(k) {
    if (k == 4) {
        var ans = " ";
        for (let i = 0; i < 4; i++) {
            if (b[i] == 1) {
                ans += a[i];
            }

        }
        console.log(b + " " + ans);
        return;
    }
    b[k] = 0;
    dfs(k + 1);
    b[k] = 1;
    dfs(k + 1);


}
dfs(0);




