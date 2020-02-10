/**
 * Created by webturing on 2020/2/9.
 */
function sort(arr, from, to) {
    if (from >= to)return;
    let k = from;
    for (let j = from + 1; j <= to; j++) {
        if (arr[j] < arr[k]) k = j;
    }
    if (k != from) {
        let temp = arr[from];
        arr[from] = arr[to];
        arr[to] = temp;
    }
    sort(arr, from + 1, to);//recursive

}

function main() {
    let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
    sort(arr, 0, arr.length - 1);
    arr.forEach(x => console.log(x));
}


main();

