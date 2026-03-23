
let change = 1;
for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
        str = str + change;
        if (change == 1) {
            change = 0;
        }
        else {
            change = 1;
        }
    }
    console.log(str);
}
//1
//01
//010
//1010
//10101