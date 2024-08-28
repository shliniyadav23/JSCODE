const input = require("readline-sync")
// let n = input.questionInt("enter the n number : ");
// let X = input.questionInt("enter the number x : " );
// let sum = 0;
// let i=1;
// while(i<=n)
// {
//     sum = sum + (X**i)/i;

// i++;
// }
// console.log(sum);


let n = input.questionInt("enter the n number : ");
let X = input.questionInt("enter the number : ");
let sum = 0;
let Y = 1;
let i=1;
let sign = 1;
while(i<=n){
    sum = sum + sign*(X**Y)/Y ;
    sign = -sign;

    i++ ;
    Y=Y+2;
}
console.log(sum);


// let n = input.questionInt("enter the n number : ");
// let X = input.questionInt("enter the number : ");
// let sum = 0;
// let Y = 1;
// let i = 1;
// let sign = 1;
// let f=1;

// while(i<=n){

//     f = f*Y;
//     sum = sum + sign*(X**Y)/f;
//     sign = -sign ;
//     i++;
//     Y = Y+2;
// }
// console.log(sum);


