function square_search(n) {
    for (let left = 1; left <= n; left++)
        for (let right = left + 1; right <= n; ++right) {
            let s = (left + right) * (right + 1 - left) / 2;

            if (s === n) {
                console.log(left + " " + right);
            }

        }

}
let n = 10005;
square_search(n);