let n = 15;
let a = new Array(n + 1);
for (let i = 0; i <= n; i++)a[i] = i;
console.log(a);
let S = new Array(n + 1);
S[0] = a[0];
for (let i = 1; i <= n; i++)S[i] = S[i - 1] + a[i];
console.log(S);

for (let i = 0; i <= n; i++) {
    let x = S[i];
    let y = S[i] + n;
    let j = binary_search(S, y, 0, n);
    if (j >= 0) {
        //todo
    }
}
