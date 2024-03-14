    // array add


const input = require("readline-sync");
let n = input.questionInt("Enter the size of array : ");

let arr = [];
let i = 0;

while (i < n) {
    let a = input.questionInt("Enter the element : ");
    arr[i] = a;
    i++;
}

let m = input.questionInt("enter the size of array :");
let arr1 = [];
let j=0;
while(j < m ){
    let b= input.questionInt("enter the element : ");
    arr1[j] = b;
    j++;
}
let arr2=[];
for(let k=0; k<n; k++){
    arr2.push(arr[k] + arr1[k])
}
console.log(arr2);