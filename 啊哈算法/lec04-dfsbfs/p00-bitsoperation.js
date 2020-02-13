function dec2bin(n) {
    let ans = n + "(10)=";
    for (let i = 31; i >= 0; i--) {
        ans += (n >> i) & 1;
        if (i % 8 == 0)
            ans += ' ';
    }
    return ans + "(2)";

}
function main() {
    var a = 3, b = 4;
    console.log(dec2bin(a));
    console.log(dec2bin(b));
    console.log(dec2bin(a & b));//bit and
    console.log(dec2bin(a | b));//bit or
    console.log(dec2bin(a ^ b));//bit xor

    console.log(dec2bin(~a));//bit not
    console.log(dec2bin(a << 4))//left-shift << a*2^k
    console.log(dec2bin(b >> 1))//right-shift >> a*2^(-k)

}
main();