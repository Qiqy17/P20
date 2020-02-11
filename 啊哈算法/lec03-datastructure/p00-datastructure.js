/**
 * Created by webturing on 2020/2/11.
 */
let data = new Array(1);
let size = 0;
function show() {
    for (let i = 0; i < size; i++) {
        console.log(data[i]);
    }
}
function enter(x) {
    if (size === data.length) {///log(n)
        console.log('**********');
        let data2 = new Array(data.length * 2);
        for (let i = 0; i < size; i++) {
            data2[i] = data[i];
        }
        data = data2;

    }
    data[size] = x;
    ++size;
}


function main() {
    for (let i = 0; i < 1024; i++)enter(i);
    show();
}

main();