/**
 * Created by webturing on 2020/2/9.
 */
let buffer = new Array(1000);
function sort(arr, from, to) {
    if (from >= to) return;
    let mid = Math.floor((from + to) / 2);
    sort(arr, from, mid);
    sort(arr, mid + 1, to);


    let i = from, j = mid + 1, k = from;
    while (i <= mid && j <= to) {
        if (arr[i] <= arr[j]) {
            buffer[k++] = arr[i++];
        } else {
            buffer[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        buffer[k++] = arr[i++];
    }
    while (j <= to) {
        buffer[k++] = arr[j++];
    }
    for (k = from; k <= to; k++) {
        arr[k] = buffer[k];
    }


}


function main() {
    let arr = [3, 1, 5, 26, 17, 8, 34, 1, 72, 4, 5];

    sort(arr, 0, arr.length - 1);
    arr.forEach(x => console.log(x));

}

main();
