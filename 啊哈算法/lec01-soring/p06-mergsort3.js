/**
 * Created by webturing on 2020/2/9.
 */

function sort(arr, from, to) {
    if (from >= to)return;
    let mid = Math.floor((from + to) / 2);
    sort(arr, from, mid);
    sort(arr, mid + 1, to);

    let buffer = new Array(to - from + 1);
    let i = from, j = mid + 1, k = 0;
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
    for (k = 0; k < buffer.length; k++) {
        arr[from + k] = buffer[k];
    }


}


function main() {
    let arr = [3, 1, 5, 26, 17, 8, 34, 1, 72, 4, 5];

    sort(arr, 0, arr.length - 1);
    arr.forEach(x => console.log(x));

}

main();
