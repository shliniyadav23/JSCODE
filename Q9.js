const input = require("readline-sync")
let n = input.questionInt("enter the n number : ");
let a = input.questionInt("enter a number : ")
let b = input.questionInt("enter a number: ");

if (a > b){
   var max = a;
   var secondmax = b;
}else {
  var max = b;
   var secondmax = a;
}
let i = 3;
while(i<=n){
    let m = input.questionInt("enter a number : ");
    if (m > max){
    secondmax = max;
    max = m;
    } else {
        if (m > secondmax){
            secondmax = m;
        } else {

        }
    }
    i++;
} console.log(secondmax);
