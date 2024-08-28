
//    module test 

// const input=require("readline-sync");
// let A = input.question("enter the string : ").split("");
// let count = 0;
// for(let i = 0; i < A.length; i++){
//     if(A[i]===A[i+1]){
//         count++;
//         i++;
//     }else{
//         count++;
//     }
// }
// console.log(count);


// palindrome sum


// let N = input.question("Enter the number: ").split(" ").map(Number);

// let sum = 0;

// for (let i = N[0]; i <= N[1]; i++) {
//     let p = i;
//     let sum1 = 0;

//     while (p > 0) {
//         let r = p % 10;
//         sum1 = sum1 * 10 + r;
//         p = Math.floor(p / 10);
//     }

//     if (sum1 === i) {
//         sum += i;
//     }
// }

// console.log("Sum of palindrome numbers ", sum);


    //   string reverse

// let n = input.question("enter the string : ")
// console.log(n);
// let revers = n.split("").reverse().join('');
// console.log(revers);

    // substring

// let A = input.question("enter the string : ");
// let count = 0;
// let arr = [];
// let set = new Set();
// for(let i = 0; i < A.length; i++){
//    if(!set.has(A[i])){
//     set.add(A[i]);
//     count++;
// }else{
//     set.clear();
//     count = 1;
//     set.add(A[i]);
// }
// arr.push(count);
// // console.log(count);
// }
// console.log(Math.max(...arr));




// longest palindromic


// const input = require("readline-sync")
// let s = input.question("enter the substring : ")
// if (s.length === 0) {
//     console.log("");
// } else {
//     let maxlength = 0;
//     let start = 0;
//     let end = 0;
//     for (let i = 0; i < s.length; i++) {
//         let left = i;
//         let right = i;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > maxlength) {
//                 maxlength = right - left + 1;
//                 start = left;
//                 end = right;
//             }
//             left--;
//             right++;
//         }
//         left = i;
//         right = i + 1;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > maxlength) {
//                 maxlength = right - left + 1;
//                 start = left;
//                 end = right;
//             }
//             left--;
//             right++;
//         }
//     }
//     console.log(s.substring(start, end + 1));
// }
