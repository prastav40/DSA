let arr = [1,2,3,4,15];
function SumOfElementsInAnArray(n){
    if(n===0) return arr[0];
    return arr[n]+SumOfElementsInAnArray(n-1)
}

console.log(SumOfElementsInAnArray(arr.length-1))