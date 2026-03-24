function ReverseInteger (num) {
    let reversed = 0;
    let sign = num
    let x =Math.abs(num);

    while(x>0){
        let lastDigit = x%10;
        reversed = reversed*10 + lastDigit;
        x = Math.floor(x/10);
    }
    sign<0?reversed=-reversed:reversed=reversed;
    return reversed;
}

console.log(ReverseInteger(120));