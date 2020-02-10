function main() {
    let n = 1223333;
    let m = 2 * n;
    for (let p = Math.floor(Math.sqrt(m)); p >= 1; p--) {

        if (m % p === 0) {
            let q = m / p;
            let l = Math.floor((q - p + 1) / 2);
            let r = Math.floor((p + q - 1) / 2);
            if (l === r && (l + r) * (r - l + 1) !== m) continue;

            console.log(l + ' ' + r);
        }
    }

}

main();

