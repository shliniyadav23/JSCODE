const input = require("readline-sync")
let n = input.questionInt("enter the n number : ");
let a = input.questionInt("enter the number : ")
let max = a;
let min = a;
i = 2;
while(i<=n){
    let b = input.questionInt("enter the number: ");
    if(b>max){
        max=b;
    }else{

    }
    if(b<min){
        min=b;
    }else{
        
    }
    i++;
}
console.log(max);
console.log(min);