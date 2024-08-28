
const input=require("readline-sync");
// let n = input.questionInt("enter the number : ");
// let sum = 0;
// let r;
// let p = n;
// let i = 1;
// while(p>0){
//     r = p % 10;
//     p = Math.floor(p/10);
//     sum = sum + r;
// }

// while (sum > 9) {
//     let tempSum = 0;
//     let tempP = sum;
//     while (tempP > 0) {
//         r = tempP % 10;
//         tempP = Math.floor(tempP / 10);
//         tempSum = tempSum + r;
//     }
//     sum = tempSum;
// }

// console.log("Sum of digits until a single-digit number is produced:", sum);

   

//  array sum positive number

// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// let i = 0;
// let sum = 0;
// while(i < n){
//      arr[i] = input.questionInt(`enter the element ${i+1} : `);
//     i++;
// }
// for(let j = 0; j<n; j++){
//     if(arr[j]>0){
//      sum = sum + arr[j];
//     }else{

//     }
// }
// console.log(sum);


        // question(7)

// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// let i = 0;
// let sum = 0;
// while(i < n){
//      arr[i] = input.questionInt(`enter the  ${i+1} element : `);
//     i++;
// }
// console.log(arr);


// for (let j=0; j< arr.length; j++){
  
//  let remove = arr.shift();
//    console.log(arr);
//    sum = sum + arr[j];
// }
// console.log(sum);



// // Input array elements
// let n = input.questionInt("Enter the size of array: ");
// let arr = [];
// let i = 0;
// while (i < n) {
//     arr[i] = input.questionInt(`Enter element ${i + 1}: `);
//     i++;
// }
// console.log("Original Array:", arr);

// let sums = []; // Empty array to store sums of remaining elements

// while (arr.length > 0) {
//     let removedElement = arr.shift(); // Remove the first element
//     console.log("Array after removing first element:", arr);

//     let remainingSum = arr.reduce((acc, curr) => acc + curr, 0); // Calculate sum of remaining elements
//     sums.push(remainingSum); // Add the sum to the sums array
// }

// console.log("Sums of remaining elements:", sums);

