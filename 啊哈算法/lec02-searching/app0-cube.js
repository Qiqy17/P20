function cube_search(n) {
    for (let left = 1; left <= n; left++)
        for (let right = left + 1; right <= n; ++right) {
            let s = 0;
            for (let k = left; k <= right; k++) {
                s += k;
            }
            if (s == n) {
                console.log(left + " " + right);
            }

        }

}
let n = 10005;
cube_search(n);