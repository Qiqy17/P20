/**
 * Created by webturing on 2020/2/9.
 */





function main() {
    let a = [1, 3, 5, 7, 9,];
    let b = [2, 4, 5, 8, 10, 14];
    let c = new Array(a.length + b.length);
    let i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            c[k++] = a[i++];
        } else {
            c[k++] = b[j++];
        }
    }

    while (i < a.length) {
        c[k++] = a[i++];

    }
    while (j < b.length) {
        c[k++] = b[j++];

    }

    c.forEach(x => console.log(x));

}

main();