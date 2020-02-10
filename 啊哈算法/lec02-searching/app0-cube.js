let n = 10005;
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