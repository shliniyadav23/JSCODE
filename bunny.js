

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array: ");
let arr = [];
let i = 0;

while (i < n) {
    let a = input.questionInt("Enter the element: ");
    arr[i] = a;
    i++;
}
console.log(arr);
let j = 0;

while (j < n) {
    let count = 0;
    let k = j + 1;
    while (k < n) {
        if (arr[j] == arr[k]) {
            count++;
        }
        k++;
    }

    if (count > 0) {
        console.log(arr[j]); 
    } else {
        console.log(0);
    }

    j++;
}


//  this type [2, 4, 0 ,0,0] duplicate print


// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array: ");
// let arr = [];
// let i = 0;

// while (i < n) {
//     let a = input.questionInt("Enter the element: ");
//     arr[i] = a;
//     i++;
// }
// console.log(arr);
// let j=0;
// let arr1=[];
// while(j<n){
//     let count=0;
//     let k=j+1;
//     while(k<n){
//         if(arr[j]==arr[k]){
//             arr1.push(arr[j])
//             count++;
//             arr[k]=0;
//         }
//         k++;
//     }
//     if(count==0){
//         arr[j]=0;
//     }
//     j++;
// }
// console.log(arr1);



// array duplicate 

// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array: ");
// let arr = [];
// let i = 0;

// while (i < n) {
//     let a = input.questionInt("Enter the element: ");
//     arr[i] = a;
//     i++;
// }
// let j=0;
// while(j<n){
//     let count=0;
//     let k=j+1;
//     while(k<n){
//         if(arr[j]==arr[k]){
//             count++;
//             arr[k]=1;

//         }
//         k++;
//     }
    
//     if(count==0){
//         arr[j]=1;
//     }
//     j++;
// }
// console.log(arr);
  
// [4,5,1,1,1,1,1] this type 