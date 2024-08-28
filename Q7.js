const input = require("readline-sync")
let n = input.questionInt("enter a number : ");
i = 1;
sum = 0;
while(i<n){
    if( n%i==0 ){
        sum = sum+i;
    }  else {
       
    }
    i++;
} if(sum == n){
    console.log("perfact number");
}else{
    console.log("not perfact number");
}

