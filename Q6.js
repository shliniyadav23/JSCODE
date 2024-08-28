// const input = require("readline-sync")
// let a = input.questionInt("enter the first number : ");
// let b = input.questionInt("enter the second number :");
// let A = a;
// let B= b;
// let c = A*B;
// while (b !== 0){
//     let  temp = b;
//     b = a % b;
//     a = temp;
// } 
// let L = Math.floor(c/a)
// console.log(a,L);



// write the program n number of HCF

// const input = require("readline-sync");
//  let n=input.questionInt("enter the value of n : ");
//    let a = input.questionInt(`enter the ${1} number : `);
//  let i=2;
//  while(i<=n){
//     let b = input.questionInt(`enter the ${i} number : `);
//     if(a>b){
//         max=a;
//         min=b;
//     }else{
//         max=b;
//         min=a;
//     }
//     i++;
//     while (min !== 0) {
//         let temp = min;
//         min = max % min;
//         max = temp;
//     }
//     a=max;
// }

// console.log(a);


// n number GCD

// const input = require("readline-sync");

// let n = input.questionInt("Enter the number of N : ");
// let a = input.questionInt("Enter the first number: ");

//  for (let i = 1; i < n; i++) {
//     let b = input.questionInt(`Enter the ${i + 1} number: `);
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
// }

// console.log("Greatest Common Divisor:", a);






// const input=require("readline-sync");
//  function FindGCD(){

//  let n = input.questionInt("Enter the number of N : ");
//  let a = input.questionInt("Enter the first number: ");

//  for (let i = 1; i < n; i++) {
//      let b = input.questionInt(`Enter the ${i + 1} number: `);
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
// }

//  console.log("Greatest Common Divisor:", a);

//  }
//  FindGCD();

//  function findperfact(){
// let n = input.questionInt("enter a number : ");
// i = 1;
// sum = 0;
// while(i<n){
//     if( n%i==0 ){
//         sum = sum+i;
//     }  else {
       
//     }
//     i++;
// } if(sum == n){
//     console.log("perfact number");
// }else{
//     console.log("not perfact number");
// }
//  }
//  findperfact();