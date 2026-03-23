for (let i = 0; i < 5; i++) {
    let str = "";
    let change = 1;

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
//10
//101
//1010
//10101