
const input = require("readline-sync");
// let nums = input.questionInt("Enter the size of array : ");
// let arr = [];

// for(let i = 0; i < nums; i++){
//     arr[i] = input.questionInt(`Enter the ${i+1} element : `)
// }
// console.log(arr);
// let arr1 =[];
// for(let j = 0; j < arr.length; j++){
//     let count = 0;
//      for(let k = 0; k < arr.length; k++){
//         if(arr[k] < arr[j]){
//             count++;
//         }
//     }
//     arr1.push(count)
// }
// console.log(arr1);


// let nums = input.questionInt("Enter the size of array : ");
// let arr = [];

// for(let i = 0; i < nums; i++){
//     arr[i] = input.questionInt(`Enter the ${i+1} element : `)
// }
// console.log(arr);

// let count = 0;
// let arr1 = [];
// for(let i = 0; i < nums; i++){
//     count += arr[i];
//     arr1.push(count);
// }
// console.log(arr1);


// Max number of words

// let sentence = input.question("Enter the sentences : ").split(",")
// console.log(sentence);

// let max = 0;
// for(let i = 0; i < sentence.length; i++){
//     let count = 1;
//      for(let j = 0; j < sentence[i].length; j++){
//         if(sentence[i][j] == " "){
//             count++;
//         }
//      }

//      if(count > max){
//         max = count;
//      }
// }
// console.log(max);


// left and right sum diff


// let nums = input.questionInt("Enter the size of array : ");
// let arr = [];

// for(let i = 0; i < nums; i++){
//     arr[i] = input.questionInt(`Enter the ${i+1} element : `);
// }
// console.log(arr);


// let count = 0;
// let arr1 = [];
// for(let i = 0; i < arr.length; i++){
//     arr1.push(count);
//     count += arr[i];
// }
// console.log(arr1);
// count = 0;
// let arr2 = [];
// for(let i = arr.length-1; i >= 0; i--){
//     arr2.unshift(count);
//     count += arr[i];
// }
// console.log(arr2);
// let array = [];
// for(let i = 0; i < arr1.length; i++){
//     let result =Math.abs(arr1[i]-arr2[i]);
//     array.push(result)
// }

// console.log(array);



// find the number of good pairs

// let nums1 = input.questionInt("Enter the size of array : ");
// let arr = [];

// for(let i = 0; i < nums1; i++){
//    arr[i] = input.questionInt(`enter the ${i+1} element : `)
// }

// let nums2 = input.questionInt("Enter the size of array : ");
// let arr1 = [];

// for(let i = 0; i < nums2; i++){
//    arr1[i] = input.questionInt(`enter the ${i+1} element : `)
// }
// console.log(arr);
// console.log(arr1);

// let k = input.questionInt("Enter the number of k : ");

// let count = 0;
// for(let i = 0; i < arr.length; i++){
//    for(let j = 0; j < arr1.length; j++){
//        if(arr[i] % (arr1[j]*k)== 0){

//          count++;
//        }
//    }
// }
// console.log(count);



// difference btw element sum and digit sum

// let n = input.questionInt("Enter the size of array: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = input.questionInt(`Enter the ${i + 1} element: `);
// }
// console.log(arr);

// let elementSum = 0;
// for (let j = 0; j < arr.length; j++) {
//     elementSum += arr[j];
// }
// console.log("Element Sum:", elementSum);

// let digitSum = 0;
// for (let k = 0; k < arr.length; k++) {
//     let number = arr[k];
//     while (number > 0) {
//         digitSum += number % 10;
//         number = Math.floor(number / 10);
//     }
// }
// console.log("Digit Sum:", digitSum);

// let diff = Math.abs(elementSum - digitSum);
// console.log("Absolute Difference:", diff);




// count number of pairs abs diff

// let n = input.questionInt("enter the size of array : ");

// let arr = [];
// for(let i = 0; i < n; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `)
// }
// console.log(arr);
 
// let k = input.questionInt("enter the difference : ");
// let count = 0;

// for(let j = 0; j < arr.length; j++){
//     for(let l = j+1; l < arr.length; l++){
//         let d = Math.abs(arr[j]-arr[l]);
//     if(d == k){
//         count++;
//     }
// }
    
// }
// console.log(count);




// first firstPalindrome


// let words = input.question("Enter the words separated by commas: ").split(',');

// console.log(words);

// let firstPalindrome = null;
// for (let i = 0; i < words.length; i++) {
//     let word = words[i].trim().toLowerCase();

//     let reversedWord = word.split('').reverse().join('');
//     if (word === reversedWord) {
//         firstPalindrome = words[i].trim(); 
//         break; 
//     }
// }

// if (firstPalindrome) {
//     console.log(`The first palindromic word is: "${firstPalindrome}"`);
// } else {
//     console.log("No palindromic words found.");
// }


// count the number of consistance string


// let str = input.question("enter the string : ").split(" ");
// console.log(str);

// let allowed = input.question("enter the consisting char : ");

// let set = new Set(allowed);

// let count = 0;

// for(let i = 0; i < str.length; i++){
//     let consistance = true;
//     for(let j = 0; j < str[i].length; j++){
//         if(!set.has(str[i][j])){
//             consistance = false;
//             break;
//         }
//     }
//     if(consistance){
//         count++;
//     }
// }

// console.log(count);



// max product diff btw

// let n = input.questionInt("enter the size of array : ");
// let arr = [];

// for(let i = 0; i < n; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `)
// }
// console.log(arr);

// let sorted = arr.sort((a,b) => b-a);
// console.log(sorted);
// let diff = (sorted[0]*sorted[1] - sorted[sorted.length-1] * sorted[sorted.length-2])

// console.log(diff);



// let n = input.questionInt("enter the size of array : ");
// let arr = [];

// for(let i = 0; i < n; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `)
// }
// console.log(arr);

// let sorted = arr.sort((a,b) => b-a)
// console.log(sorted);

// let product = ((sorted[0]-1)*(sorted[1]-1));
// console.log(product);



// separate the digits in an array




let n = input.questionInt("enter the size of array : ");
let arr = [];

for(let i = 0; i < n; i++){
    arr[i] = input.questionInt(`enter the ${i+1} element : `)
}
console.log(arr)

let arr1 = [];
// for(let j = 0; j < arr.length; j++){
//     let num = arr[j];
//     let numstr = num.toString();
//     for(let j = 0; j < numstr.length; j++){
//         arr1.push(Number(numstr[j]))
//     }
    
// }
// console.log(arr1);


arr.forEach(num => {
    let digits = num.toString().split("").map(Number);
    arr1 = arr1.concat(digits)
})
console.log(arr1);