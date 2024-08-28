const input = require("readline-sync")
let n = input.questionInt("enter a number : ");
let i = 1;
let c = 0;
while( i<=n ){
    if(n%i==0){
        c++;
    } else {

    }
    i++;
} if ( c == 2){
    console.log("prime");
} else {
    console.log("not a prime");
}