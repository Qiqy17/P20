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


function main() {
    for (let i = 0; i < 10; i++) {
        push(i);
    }
    while (!empty()) {
        console.log(peek());
        pop();
    }
}

main();