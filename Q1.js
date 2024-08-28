const input = require('readline-sync')


let a = input.questionInt("enter the first number");
let b = input.questionInt("enter the second number");
let c = input.questionInt("enter the third number");
if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else {
    console.log(c);
}

