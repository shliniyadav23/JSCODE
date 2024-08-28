
//    stringlenth find

// const input=require("readline-sync");
// let n=input.questionInt("enter the size of array : ");
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.question(`enter the ${i+1} element : `);
//     i++;
// }
// console.log(arr);
// let max = arr[0].length;
// for(let i =1; i < n; i++){
//     if(arr[i].length > max){
//       max = arr[i].length;
//     }
// }

// console.log(max);



// max and min

// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array: ");
// let arr = [];
// let i = 0;

// while (i < n) {
//     arr[i] = input.questionInt(`Enter the ${i + 1} element: `);
//     i++;
// }
// console.log(arr);

// let max = arr[0]; 
// let min = arr[0]; 

// for (let j = 1; j < n; j++) { 
//     if (arr[j] > max) {
//         max = arr[j]; 
//     }
//     if (arr[j] < min) {
//         min = arr[j]; 
//     }
// }
// console.log("Max:", max, "Min:", min);



// second largest number

// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array: ");
// let arr = [];
// let i = 0;

// while (i < n){
//     arr[i] = input.questionInt(`Enter the ${i+1} element: `);
//     i++;
// }

// let max = arr[0];
// let secondmax = arr[1]; 
// for (let j = 1; j < n; j++) { 
//     if (arr[j] > max) {
//         secondmax = max;
//         max = arr[j]; 
//     } else {
        
//     }
// }
// console.log("Second Max:", secondmax);




    // two array element addition

// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array : ");

// let arr = [];
// let i = 0;

// while (i < n) {
//     arr[i] = input.questionInt("Enter the element : ");
//     i++;
// }

// let m = input.questionInt("enter the size of array :");
// let arr1 = [];
// let j=0;
// while(j < m ){
//     arr1[j] = input.questionInt("enter the element : ");
//     j++;
// }
// let arr2=[];
// for(let k=0; k<n; k++){
//     arr2.push(arr[k] + arr1[k])
// }
// console.log(arr2);


//    one array all element addition


//  const input=require("readline-sync");
//  let n=input.questionInt("enter the size of array : ");
//  let arr=[];
//  let i = 0;
//  while(i < n){
//     arr[i]=input.questionInt(`enter the ${i+1} element : `)
//     i++;
//  }

//  let sum = 0;
//  for(let j=0; j<n; j++){
//     sum += arr[j];
//  }

//  let arr1 = [sum];

//  console.log(arr1);




// array palindrome

// const input=require("readline-sync");
// let n=input.questionInt("enter the size of array : ");
// let arr = [];
// let i = 0;
// let result="true";
// while(i < n){
//     arr[i]=input.questionInt(`enter the ${i+1} element : `);
//     i++;
// }
// let arr1 = [];
// let b = n-1;
// for(let j=0; j<n; j++){
//     arr1[j]=arr[b];
//     b--;
// }
// console.log(arr1);
// for(k=0; k<n; k++){
//     if(arr[k]==arr1[k]){
//         break;
//     }else{
//          result="false";

//     }
// }
// console.log(result);


// const input=require("readline-sync");
// let n=input.questionInt("enter the number : ");
// let i=0;
// while(i<=n){
//       if(n % i==0){
//         console.log(`${i}`);
//       }else{

//       }
//     i++;
// }
