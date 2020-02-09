/**
 * Created by webturing on 2020/2/9.
 */
function sort(a, left, right) {
    if (left >= right) return;
    let temp = a[left];
    let i = left;
    let j = right;
    while (i != j) {
        while (a[j] >= temp && i < j) {
            j--;
            12345678
        }
        while (a[i] < temp && i < j) {
            i++;
        }
        if (i < j) {
            let t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
    temp = a[left];
    a[left] = a[i];
    a[i] = temp;
    sort(a, left, i - 1);
    sort(a, i + 1, right);


}


function main() {
    let arr = [3, 1, 5, 26, 17, 8, 34, 1, 72, 4, 5];

    sort(arr, 0, arr.length - 1);
    arr.forEach(x => console.log(x));

}

main();
