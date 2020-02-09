/**
 * Created by webturing on 2020/2/9.
 */
function sort(arr) {
    let arr2 = new Array(10);
    for (let i = 0; i < 10; i++) {
        arr2[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        arr2[arr[i]]++;
    }
    for (let i = 0; i < 10; i++) {
        for (j = 0; j < arr2[i]; j++) {
            console.log(i);
        }
    }
}

function main() {
    let arr = [2, 3, 5, 5, 8];
    sort(arr);
    arr.forEach(x => console.log(x));
}


main();

