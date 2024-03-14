
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array: ");

let arr = [];
let i = 0;

while (i < n) {
    let a = input.questionInt("Enter the element: ");
    arr[i] = a;
    i++;
}
let arr1 = [];
let j = 0;
while (j < n){
    let count = 1;
    let k = j + 1;
    while (k < n){
        if (arr[j] == arr[k]){
            count++;
        }else{

        }
    k++;
    }
    if (count > 1){
        if (arr1.includes(arr[j])){

        }else {
            arr1.push(arr[j]);
        }
    }else {

    }
    j++;
}
// console.log(arr1);
 for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
 }
  
 

 






































