/**
 * Created by webturing on 2020/2/11.
 */
let data = new Array(100);
let top = -1;
function init() {
    top = -1;
}
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

//逆波兰式求值
function main() {
    let exp = [1, 2, '+', 3, 4, '+', '*'];
    init();
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '+') {
            let b = peek();
            pop();
            let a = peek();
            pop();
            push(a + b);
        } else if (exp[i] === '*') {
            let b = peek();
            pop();
            let a = peek();
            pop();
            push(a * b);
        } else {
            push(exp[i]);
        }
    }
    console.log(peek());
}

main();