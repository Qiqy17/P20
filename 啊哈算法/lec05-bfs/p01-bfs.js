/**
 * Created by webturing on 2020/2/14.
 */

let G = [['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],];
let book = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],];
let start = {'x': 0, 'y': 0};
let Q = new Array(10000), head = 0, tail = 0;

Q[tail++] = start;
book[Q[head].x][Q[head].y] = 1;


while (head < tail) {
    let x = Q[head].x, y = Q[head].y;
    //  (x-1,y) (x+1,y) (x,y-1) (x,y+1)
    if (x - 1 >= 0 && !book[x - 1][y]) {
        Q[tail++] = {'x': x - 1, 'y': y};
        book[x - 1][y] = 1;
    }
    if (y + 1 < 4 && !book[x][y + 1]) {
        Q[tail++] = {'x': x, 'y': y + 1};
        book[x][y + 1] = 1;
    }
    if (x + 1 < 4 && !book[x + 1][y]) {
        Q[tail++] = {'x': x + 1, 'y': y};
        book[x + 1][y] = 1;
    }
    if (y - 1 >= 0 && !book[x][y - 1]) {
        Q[tail++] = {'x': x, 'y': y - 1};
        book[x][y - 1] = 1;
    }

    console.log(G[x][y]);
    ++head;
}




