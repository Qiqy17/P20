/**
 * Created by webturing on 2020/2/9.
 */
function sort(arr) {
    for (let i = 0, n = arr.length; i < n; i++) {
        for (let j = n - 2; j >= i; j--) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }

        }
    }
}

function main() {
    let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
    sort(arr);
    arr.forEach(x => console.log(x));
}


main();

