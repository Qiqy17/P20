/**
 * Created by webturing on 2020/2/14.
 */

let G = [
    ['A', '/', 'C', 'D'],
    ['E', '/', 'G', '/'],
    ['/', 'J', '/', 'L'],
    ['M', 'N', '/', 'P'],];
let book = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],];
let start = {'x': 0, 'y': 0};
let Q = new Array(10000), head = 0, tail = 0;
let count = 0;
for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++) {
        if (book[i][j] === 1 || G[i][j] === '/')continue;
        Q[tail++] = {'x': i, 'y': j};
        ++count;
        book[i][j] = 1;

        while (head < tail) {
            let x = Q[head].x, y = Q[head].y;
            //  (x-1,y) (x+1,y) (x,y-1) (x,y+1)
            if (x - 1 >= 0 && !book[x - 1][y] && G[x - 1][y] !== '/') {

                Q[tail++] = {'x': x - 1, 'y': y};
                book[x - 1][y] = 1;
            }
            if (y + 1 < 4 && !book[x][y + 1] && G[x][y + 1] !== '/') {
                Q[tail++] = {'x': x, 'y': y + 1};
                book[x][y + 1] = 1;
            }
            if (x + 1 < 4 && !book[x + 1][y] && G[x + 1][y] !== '/') {
                Q[tail++] = {'x': x + 1, 'y': y};
                book[x + 1][y] = 1;
            }
            if (y - 1 >= 0 && !book[x][y - 1] && G[x][y - 1] !== '/') {
                Q[tail++] = {'x': x, 'y': y - 1};
                book[x][y - 1] = 1;
            }

            console.log(G[x][y]);
            ++head;
        }


    }

console.log('count=' + count);


