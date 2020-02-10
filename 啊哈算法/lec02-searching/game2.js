var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var left = 1, right = 1000000, time = 20;
var key = Math.floor((right - left + 1) * Math.random() + left);
rl.on('line', function (line) {
    if (time == 0) return;
    //var user = parseInt(line);
    var user = Math.floor((left + right) / 2);
    console.log('Computer thinks the best answer is ' + user);
    if (user == key) {

        console.log('Congratulations');

    } else if (user > key) {
        right = user - 1;
        console.log('Too Bigger');
    } else {
        left = user + 1;
        console.log('Too Smaller');
    }
    --time;

});