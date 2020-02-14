/**
 * Created by webturing on 2020/2/13.
 */
let c = [0, 1, 2, 3, 4, 5, 6, 7,]
let a = [0, 0, 0, 0, 0, 0, 0, 0,];
let b = [0, 0, 0, 0, 0, 0, 0, 0];


function dfs(k) {
    if (k == 8) {
        let ans = " ";
        for (let i = 0; i < 8; i++) {
            ans += "(" + i + "," + a[i] + ")";
        }
        console.log(ans);
        for (let i = 0; i < 8; i++) {
            ans = '';
            for (let j = 0; j < 8; j++) {
                if (j === a[i])
                    ans += '[Q]';
                else
                    ans += '[ ]';
            }
            console.log(ans);
        }


        return;
    }
    for (let i = 0; i < 8; i++) {
        if (b[i]) continue;//
        let flag = true;
        for (let j = 0; j < k; j++) {
            let slope = (c[i] - a[j]) / (k - j);
            if (Math.abs(slope) === 1) {
                flag = false;
                break;
            }
        }
        if (!flag)continue;
        a[k] = c[i];//Q[k] (k,c[i])
        b[i] = 1;
        dfs(k + 1);
        b[i] = 0;
    }

}

dfs(0);




