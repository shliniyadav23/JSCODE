
// sum of digit in single like 456=6

const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");

while (n >= 10) {
    let sum = 0;

    while (n > 0) {
        let r;
        r = n % 10;
        sum += r;
        n = Math.floor(n / 10);
    }

     n = sum;
 }
 console.log(`Single digit result: ${n}`);




// sum of the digit

// const input = require("readline-sync");
// let n = input.questionInt("Enter the number: ");

// let i = n;
// let sum = 0;
// while(i>0){
//     let r = i%10;
//     sum = r + sum;
//     i = Math.floor(i/10);
// }
// console.log(sum);

  
     // sum of digit in single like 456=6

// const input = require("readline-sync");
// let n = input.questionInt("Enter the number: ");

// let sum = 0;

// while (n > 0 || sum > 9) {
//     if (n === 0) {
//         n = sum;
//         sum = 0;
//     }
//     let r = n % 10;
//     sum = sum + r;
//     n = Math.floor(n / 10);
// }

// console.log("Sum of digits until single digit:", sum);



// const input=require("readline-sync");
// let n=input.questionInt("enter the size of array : ");
// let arr=[];
// let i = 0;
// while(i<n){
//     arr[i]=input.questionInt(`enter the ${i+1} element : `)
//     i++;
// }
// console.log(arr);
// let m=input.questionInt("enter the position : ")
// arr.splice(m-1 , 1);
// console.log(arr);





// let arr = [1, 3, 2, 5, 3, 4, 2];
// let uniqueArray = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log("Array with duplicates removed:", uniqueArray);




// const input=require("readline-sync");
// let n=input.questionInt("enter the size of array : ")
// let arr1=[];
// let i = 0;
// while(i < n){
//     arr1[i]=input.questionInt(`enter the ${i+1} element : `);
//     i++;
// }

// let m=input.questionInt("enter the size of array : ");
// let arr2=[];
// let j = 0;
// while(j < m){
//     arr2[j]=input.questionInt(`enter the ${j+1} element : `);
//     j++;
// }
// console.log(arr1);
// console.log(arr2);

// let mergedArray = [];
// let p = 0, s = 0;
// while (p < arr1.length && s < arr2.length) {
//     if (arr1[p] < arr2[s]) {
//         mergedArray.push(arr1[p]);
//         p++;
//     } else {
//         mergedArray.push(arr2[s]);
//         s++;
//     }
// }
// while (p < arr1.length) {
//     mergedArray.push(arr1[p]);
//     p++;
// }
// while (s < arr2.length) {
//     mergedArray.push(arr2[s]);
//     s++;
// }
// console.log("Merged sorted array:", mergedArray);


// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let mergedArray = [];
// let i = 0, j = 0;
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         mergedArray.push(arr1[i]);
//         i++;
//     } else {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
// }
// while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
// }
// while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
// }
// console.log("Merged sorted array:", mergedArray);
