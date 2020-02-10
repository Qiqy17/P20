/**
 * Created by webturing on 2020/2/10.
 */
function linear_search(arr, key) {//O(n)
    let pos = -1;
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            pos = i;
            break;
        }
    }
    return pos;

}
function main() {
    let arr = [1, 3, 5, 7, 2, 4, 6, 8, 0, 7];
    let key = 7;
    console.log(arr.indexOf(key));
    console.log(linear_search(arr, key));
}
main();
