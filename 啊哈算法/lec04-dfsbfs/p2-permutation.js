/**
 * Created by webturing on 2020/2/13.
 */
for (let a = 1; a <= 4; a++)
    for (let b = 1; b <= 4; b++) {
        if (a == b)continue;
        for (let c = 1; c <= 4; c++) {
            if (a == c || b == c)continue;
            let d = 10 - a - b - c;
            console.log('' + a + b + c + d);
        }
    }

