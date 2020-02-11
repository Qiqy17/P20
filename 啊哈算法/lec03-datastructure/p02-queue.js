/**
 * Created by webturing on 2020/2/11.
 */
let data = new Array(100);
let head = 0, tail = 0;//[head,tail)
function init() {
    head = tail = 0;
}
function empty() {
    return head === tail;
}
function size() {
    return tail - head;
}
function peek() {
    return data[head];
}
function push(x) {
    data[tail++] = x;
}
function pop() {
    ++head;
}
function show() {
    for (let i = head; i < tail; i++) {
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