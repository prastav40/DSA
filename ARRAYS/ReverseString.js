var reverseString = function(arr) {
    let c="";
    let n=arr.length;
    for(let i=0;i<arr.length/2;i++){
        c=arr[i];
        arr[i]=arr[n-1-i];
        arr[n-1-i]=c;
    }

    return arr;
};

console.log(reverseString(["h","e","l","l","o"]))

//[ 'o', 'l', 'l', 'e', 'h' ]