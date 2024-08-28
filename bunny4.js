// //    BINARAY SEARCH(target)

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array : ");

let arr = [];
let i = 0;

while (i < n) {
 let a = input.questionInt(`enter the ${i+1} element : `);
 arr[i] = a;
 i++;
}
console.log(arr);

let m=input.questionInt("enter the value of k : ");
let p = "NO";
let left = 0;
let right = n-1;

while(left <= right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid]== m){
     
        p = "YES";
        break;
         
    }else{
        if(arr[mid] < m){
            left = mid+1;

        }else{
            right = mid-1;
        }
    }
}
console.log(p);



// let a = input.questionInt("Enter the size of array : ")

// let arr = [];
// for(let i = 0; i < a; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `)
// }

// console.log(arr);

// let arr1 = []
// for(let j = 0; j < arr.length; j++){
//     for(let k = j+1; k < arr.length; k++){
//         let diff = arr[j] + arr[k];
//         if()
//     }
// }


// let a = "bunny"
// let b = "ynnub"
// if (a == b){
//     console.log(true);
// }else{
//     console.log(false);
// }




// var arrayStringsAreEqual = function(word1, word2) {
//     let sum = "";
//     for(let i = 0; i < word1.length; i++){
//         sum += word1[i];
//     }
//     let sum1 = ""
//     for(let j = 0; j < word2.length; j++){
//         sum1 += word2[j];
//     }
//     if(sum == sum1){
//         return "True"
//     }else{
//         return "False"
//     }

// };

// console.log(arrayStringsAreEqual(["ab","c"],["b","ac"]));