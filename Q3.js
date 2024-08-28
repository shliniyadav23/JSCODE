const input = require('readline-sync')
let a = input.questionInt("enter the first number : ");
let b = input.questionInt("enter the second number : ");
let c = input.questionInt("enter the third number : ");
let d = input.questionInt("enter the forth number :");
if(a<b && a<c && a>d || a<c && a<d && a>b || a<d && a<b && a>c) {
    console.log(a);
}else if(b<a && b<c && b>d || b<c && b<d && b>a || b<d && b<a && b>c) {
    console.log(b);
}else if(c<a && c<b && c>d || c<d && c<a && c>b || c<b && c<d && c>a) {
    console.log(c);
}else{
    console.log(d);
}
