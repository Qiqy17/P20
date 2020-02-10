/**
 * Created by webturing on 2020/2/10.
 */

function pow2(a, n) {
    let ans = 1;
    for (let i = 0; i < n; i++)ans *= a;
    return ans;

}
function pow(a, n) {
    if (n == 0)return 1;
    if (n == 1)return a;

    if (n % 2 == 0) {
        let t = pow(a, n / 2);
        return t * t;
    }
    let t = pow(a, (n - 1) / 2);
    return t * t * a;
}


function main() {
    console.log(pow(2, 11));
    //console.log(pow2(2,10));
}

main();