/**
 * Created by webturing on 2020/2/13.
 */
let c = [0, 1, 2, 3]
let a = [0, 0, 0, 0];
let b = [0, 0, 0, 0];


function dfs(k) {
    if (k == 4) {
        var flag = 1;
        for (let i = 0; i < 4; i++)
            for (let j = i + 1; j < 4; j++) {
                var slop = (a[i] - a[j]) / (i - j);
                if (slop == 1 || slop == -1) {
                    flag = 0;
                }
            }
        if (flag) {
            var ans = " ";
            for (let i = 0; i < 4; i++) {

                ans += "(" + i + "," + a[i] + ")";


            }
            console.log(ans);
            for (let i = 0; i < 4; i++) {
                ans = '';
                for (let j = 0; j < 4; j++) {
                    if (j === a[i])
                        ans += '[Q]';
                    else
                        ans += '[ ]';
                }
                console.log(ans);
            }


        }

        return;
    }
    for (let i = 0; i < 4; i++) {
        if (b[i]) continue;//
        a[k] = c[i];
        b[i] = 1;
        dfs(k + 1);
        b[i] = 0;
    }

}

dfs(0);




