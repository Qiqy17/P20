function sqrt_search(n) {
    let m = 2 * n;
    for (let p = Math.floor(Math.sqrt(m)); p >= 1; p--) {

        if (m % p === 0) {
            let q = m / p;
            let l = Math.floor((q - p + 1) / 2);
            let r = Math.floor((p + q - 1) / 2);
            if (r > l && (p + q) % 2 === 1)

                console.log(l + ' ' + r);
        }
    }

}

sqrt_search(10000000027);

