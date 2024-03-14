
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array : ");

let arr = [];
let i = 0;

while (i < n) {
 let a = input.questionInt(`enter the ${i+1} element : `);
 arr[i] = a;
 i++;
}
let b= input.questionInt("enetr the value of b : ");
let arr1=[];
for(let i=0; i<n; i++){


    for(let j=i+1; j<n; j++){

         let sum = arr[i] + arr[j];
         if(sum == b){
            arr1.push(arr[i],arr[j])
         }else{

         }
    }
}console.log(arr1);
