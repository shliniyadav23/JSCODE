
// deletion

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array: ");
let arr=[];
let i=0;
while(i<n){
    let m = input.questionInt(`enter the ${i+1} element : `);  
    arr[i]=m;
    i++;
}
let k = input.questionInt("enter the element position k :");
arr.splice(k-1 , 1);
console.log(arr);


