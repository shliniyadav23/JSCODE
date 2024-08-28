
const input=require("readline-sync");
// let a = input.question("enter the first number : ");
// let arr = [];
// for(let i = 0; i < a; i++){
//     arr[i]=input.questionInt("enter the element : ")
// }
// console.log(arr);
// let b = input.questionInt("enter the second number : ");
// let arr1=[];
// for(let j = 0; j < b; j++){
//     arr1[j]=input.questionInt("enter the element : ")
// }
// console.log(arr1);

// let m = arr.concat(arr1);
// console.log(m.sort());
//  let length = m.length;
//  console.log(length);

// if(length % 2==0){
    
//     let mid1 = Math.floor((length - 1) / 2);
//     let mid2 = Math.floor(length / 2);
//     median = (m[mid1] + m[mid2]) / 2;
// }else{
    
//     median = m[Math.floor(length / 2)];

// }
// console.log("Median:", median);

// integer reverse



// let n = input.questionInt("Enter the number: ");
// let sum = 0;
// let p = Math.abs(n); 

// while (p > 0) {
//     let r = p % 10; 
//     p = Math.floor(p / 10);
//     sum = sum * 10 + r; 
// }


// if (n < 0) {
//     sum = -sum;
// }

// console.log(sum);


// Longest common prefix


// let n = input.questionInt("Enter the size of array: ");
// let arr = [];

// for(let i = 0; i < n; i++){
//     arr[i] = input.question(`Enter the ${i+1} element: `);
// }

// console.log(arr);

// let start = arr[0];
// let end = arr[arr.length - 1];
// let i = 0;

// while(i < start.length && i < end.length && start[i] === end[i]){
//     i++;
// }

// console.log(start.substring(0, i));


// letter to combination



// let digits = input.question("enter the string numbers : ")

// const digitToLetters = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz'
//   };
  
  
//   if (!digits.length) {
//     console.log([]);  // Output for empty input
//   } else {
//     let queue = [''];  // Start with an empty combination
  
//     for (let i = 0; i < digits.length; i++) {
//       let digit = digits[i];
//       let letters = digitToLetters[digit];
//       let newQueue = [];
  
//       // Process each combination in the current queue
//       for (let j = 0; j < queue.length; j++) {
//         let combination = queue[j];
  
//         // Append each letter corresponding to the current digit
//         for (let k = 0; k < letters.length; k++) {
//           let letter = letters[k];
//           newQueue.push(combination + letter);
//         }
//       }
  
//       // Update the queue with the new combinations
//       queue = newQueue;
//     }
  
//     console.log(queue);  // Output the final combinations
//   }
  
  


let s = input.question("Enter the string: ");
let sum = 0;
let arr = [];

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  let asciiCode = char.charCodeAt(0);
  arr.push(asciiCode);
}
console.log(arr);

let arr1 = [];
for (let j = 0; j < arr.length - 1; j++) {
  let diff = Math.abs(arr[j] - arr[j + 1]);
  arr1.push(diff);
}

for (let k = 0; k < arr1.length; k++) {
  sum += arr1[k];
}

console.log("Output:", sum);




