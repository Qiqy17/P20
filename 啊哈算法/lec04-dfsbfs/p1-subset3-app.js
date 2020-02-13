/**
 * Created by webturing on 2020/2/13.
 */
let arr = [1, 2, 5];
let n = arr.length;

for (let i = 0; i < (1 << n); i++) {
    // console.log(i);
    let s = 0;
    let ans = "";
    for (let j = n - 1; j >= 0; j--) {
        ans += (i >> j) & 1;
        if ((i >> j) & 1)
            s += arr[j];

    }
    console.log(ans + " " + s);
}