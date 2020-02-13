/**
 * Created by webturing on 2020/2/13.
 */
let n = 9;
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a = new Array(n);
let b = new Array(n);
for (let i = 0; i < n; i++) b[i] = 0;
let sol = 0;

function dfs(k) {
    if (k == n) {
        if (a[0] * 100 + a[1] * 10 + a[2] + a[3] * 100 + a[4] * 10 + a[5] === a[6] * 100 + a[7] * 10 + a[8]) {


            console.log(++sol + ": " + a[0] + a[1] + a[2] + " + " + a[3] + a[4] + a[5] + " = " + a[6] + a[7] + a[8]);

        }

        return;
    }
    for (let i = 0; i < n; i++) {
        if (b[i]) continue;//
        a[k] = c[i];
        b[i] = 1;
        dfs(k + 1);
        b[i] = 0;
    }

}

dfs(0);
console.log(sol / 9 / 8 / 7 / 6 / 5 / 4 / 3 / 2);




