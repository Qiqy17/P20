let n = 15;

for (let i = 0; i < (1 << n); i++) {
    // console.log(i);
    let ans = "";
    for (let j = n - 1; j >= 0; j--) {
        ans += (i >> j) & 1;

    }
    console.log(ans);
}