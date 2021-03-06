/**
 * Created by webturing on 2020/2/11.
 */
let data = new Array(100);
let top = -1;

function empty() {
    return top === -1;
}
function size() {
    return top + 1;
}
function peek() {
    return data[top];
}
function push(x) {
    data[++top] = x;
}
function pop() {
    --top;
}
function show() {
    for (let i = 0; i < size(); i++) {
        console.log(data[i]);
    }
}

//进制转化
function main() {
    let n = 6;
    while (n > 0) {
        // console.log(n%2);
        push(n % 2);
        n = Math.floor(n / 2);
    }
    while (!empty()) {
        console.log(peek());
        pop();
    }
}

main();