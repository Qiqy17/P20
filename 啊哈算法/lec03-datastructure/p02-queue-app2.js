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
    let Q = [1,9,2,6,3,8,4,7,5];
    init();
    for (let i = 9; i >= 1; i--) {
        if (!empty()) {
            push(peek());
            pop();
        }
        push(i);
    }
    show();
}

main();