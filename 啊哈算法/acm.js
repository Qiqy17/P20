while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);

    function add(m, n) {
        return m + n;
    }

    print(add(a, b));
}