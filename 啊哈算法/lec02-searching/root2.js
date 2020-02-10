/**
 * Created by webturing on 2020/2/10.
 */

const EPS = 1E-10;
function f(x) {
    return x * x - 2;

}
let left = 1, right = 2;
let cnt = 0;
while ((right - left) > EPS) {
    let mid = (left + right) / 2;
    if (f(mid) > 0) {
        right = mid;
    } else {
        left = mid;
    }
    ++cnt;

}
console.log(left);
console.log(cnt);