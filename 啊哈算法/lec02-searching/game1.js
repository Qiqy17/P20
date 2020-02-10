var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var start = 1, end = 100, time = 10;
var key = Math.floor((end - start + 1) * Math.random() + start);
rl.on('line', function (line) {
    if (time == 0) return;
    var user = parseInt(line);
    if (user == key) {
        console.log('Congratulations');

    } else if (user > key) {
        console.log('Too Bigger');
    } else {
        console.log('Too Smaller');
    }
    --time;

});