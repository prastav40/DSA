let arr = [1, 2, 3, 4, 15];

function SumOfAllOddElementsInAnArray(n) {
    let isOdd = arr[n] % 2 !== 0; 
    if (n === 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[n] : 0) + SumOfAllOddElementsInAnArray(n - 1);
}

console.log(SumOfAllOddElementsInAnArray(arr.length-1)); // Output: 19 (1 + 3 + 15)