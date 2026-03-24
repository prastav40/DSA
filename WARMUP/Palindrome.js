function palindrome(number){
     let result=0;
     let x=number;
     
     if(x<0) return number+" It is Not a palindrome";

     if(x==0) return "0 is a Palindrome";
     

     while(x>0) {
        let lastDigit=x%10;
        result=result*10+lastDigit;
        x=Math.floor(x/10);
     }

     if(result==number) return number+" is a Palindrome";
     else return number+" is Not a palindrome";

}

console.log(palindrome(121));