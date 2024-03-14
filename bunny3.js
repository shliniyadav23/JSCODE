    //   rotation

 const input = require("readline-sync");
 let n = input.questionInt("Enter the size of array : ");

let arr = [];
let i = 0;

while (i < n) {
    
let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
    i++;
}
let arr1= [];
let t = 0;
let rotation = input.questionInt("enter the number of rotation : ");
for(let i=0; i< rotation -1; i++){

    arr1.push(arr.shift())
}
let arr2 = arr.concat(arr1)
console.log(arr2);