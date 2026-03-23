let arr = [-99, 10, 20, 30, 40, -60, 111111111];


function highestNumber(arry) {
    let highestnumber = -Infinity;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] > highestnumber) {
            highestnumber = arry[i]
        }
    }

    
    console.log(highestnumber)
}

highestNumber(arr)
