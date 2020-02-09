/**
 * Created by webturing on 2020/2/9.
 */
function sort(arr) {
    for (let i = 0, n = arr.length; i < n; i++) {
        //arr[0,i) is sorted
        //arr[i,n-1] is unsorted
        //find minimum element arr[k]
        //swap arr[k] and arr[i]
        let k = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[k]) {
                k = j;
            }
        }
        if (k !== i) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }

    }

}

function main() {
    let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
    sort(arr);
    arr.forEach(x => console.log(x));
}


main();

