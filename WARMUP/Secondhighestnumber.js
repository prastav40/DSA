let arr = [-99, 10, 20, 30, 40, -60, 100,99,100];

function findSecondHighest(arry) { 
    let highest = -Infinity;
    let secondHighest = -Infinity;

    if (arry.length < 2) {
        return "invalid array"
    }

    for (let i = 0; i < arry.length; i++){
        if (arr[i] > highest) {
            secondHighest = highest;
            highest=arr[i]
        }

        else if(arr[i] > secondHighest&&arr[i]!==highest ){
            secondHighest=arr[i]
        }
    }
    if (secondHighest === -Infinity) {
        console.log("No unique second highest number found (all elements might be the same).");
    } else {
        console.log(secondHighest);
    }
}

findSecondHighest(arr); 

//cornercase
//array has zero element
//array has only one element
//array has same more than one element
//array has all same element