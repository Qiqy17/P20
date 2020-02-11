/**
 * Created by webturing on 2020/2/10.
 */
function binary_search(arr, key, left, right) {//O(log n)
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == key)
            return mid;
        if (arr[mid] > key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

function main() {
    let arr = [1, 3, 5, 7, 2, 4, 6, 8, 0, 7];
    arr.sort((a, b) => a - b);
    let key = 7;
    console.log(binary_search(arr, key, 0, arr.length - 1));

}

main();
