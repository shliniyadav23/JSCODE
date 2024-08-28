

const input = require("readline-sync");
let A = input.questionInt("Enter the starting number: ");
let B = input.questionInt("Enter the ending number : ");

function countN(num) {
   const numStr = num.toString();
   const numDigits = numStr.length;

   let sum = 0;
   let a = num;

   while (a !=0) {
        let r = a % 10;
        sum += r ** numDigits;
        a = Math.floor(a / 10);
   }

   if (sum === num) {
        console.log(num  + " is an Armstrong number");
   }else{

   }
}

for (let i = A; i <= B; i++) {
    countN(i);
}
