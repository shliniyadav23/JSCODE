
const input=require("readline-sync");
let binaryStr = input.question("enter the binaray number : ").split("")
console.log(binaryStr);
let arr = [];
let count = 0;
for(let i = 0; i < binaryStr.length; i++){
    if (binaryStr[i] == 1){
        count++;
    }else {
        arr.push(count);
        count = 0;
    }
    }
let max = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log(max);




