//    BINARAY SEARCH

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array : ");

let arr = [];
let i = 0;

while (i < n) {
 let a = input.questionInt(`enter the ${i+1} element : `);
 arr[i] = a;
 i++;
}
let m=input.questionInt("enter the value of k : ");
let p = "NO";
let left = 0;
let right = n-1;

while(left <= right){
    let s = Math.floor((left+right)/2);
    if(arr[s]== m){
     
        p = "YES";
        break;
         
    }else{
        if(arr[s] < m){
            left = s+1;

        }else{
            right = s-1;
        }
    }
}
console.log(p);