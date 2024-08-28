
//   array number and zero saperayed


// const input = require("readline-sync");
// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// let i = 0;
// while (i < n) {
//     arr[i] = input.questionInt(`enter the ${i + 1} element : `);
//     i++;
// }
// console.log(arr);

// let j = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] != 0) { 
//         arr[j] = arr[i]; 
//         j++;
//     }
// }

// while (j < n) {
//     arr[j] = 0;
//     j++;
// }
// console.log("separated array ", arr);




// fibonacci number

// const input=require("readline-sync");
// let n=input.questionInt("enter the n number : ");
// let i=1;
// let a = 0;
// let b = 1;
// let c;
// while(i<=n){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;

//     i++;
// }

const input = require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i = 0;
while(i < n){
    arr[i] = input.questionInt(`enter the ${i+1} elemen : `);
    i++;
}
console.log(arr);

