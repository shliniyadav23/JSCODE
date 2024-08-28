const input = require('readline-sync')
let n = input.questionInt("enter a numer : ");
let i=1;
let p=n;
let sum=0;
while(p>0){
    r = p%10;
    p = Math.floor(p/10);
    sum = (sum*10)+r;
    i++ ;
}if(n==sum){
    console.log("palindrom");
}else{
    console.log("not palnindrome");
}


