function binary_search(arr, key, left, right) {//O(log n)
    if (left > right)return -1;
    if (left === right)return arr[left] === key ? left : -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key)return mid;
    if (arr[mid] > key)return binary_search(arr, key, left, mid - 1);

    return binary_search(arr, key, mid + 1, right);

}

function main() {
    let n = 1000005;
    let a = new Array(n + 1);
    for (let i = 0; i <= n; i++)a[i] = i;
    //console.log(a);
    let S = new Array(n + 1);
    S[0] = a[0];
    for (let i = 1; i <= n; i++)S[i] = S[i - 1] + a[i];
    //console.log(S);

    for (let i = 0; i <= n; i++) {
        let x = S[i];
        let y = S[i] + n;
        let j = binary_search(S, y, i + 1, n);
        if (j > i + 1) {
            console.log(i + 1 + " " + j);
        }
    }

}
main();

