const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
for (let i = 0; i < n; i++){
    let x = input.questionInt("enter 1[for array] or 0[for element] : ");
    if (x == 1){
        let y = input.questionInt("enter the size of inner array : ");
        arr[i] = [];
        for (let j = 0; j < y; j++){
            arr[i][j] = input.questionInt(`enter the ${j+1} element : `);
        }
    }else {
        arr[i] = input.questionInt(`enter the ${i+1} element : `);
    }
}console.log(arr);
// let finalarr = arr.flat();
// console.log(finalarr);
let arr1 = [];
for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
        for (let j = 0; j < arr[i].length; j++){
            arr1.push(arr[i][j]);
        }
    }else{
        arr1.push(arr[i]);
    }
}
arr1.sort((a,b) => a-b)
console.log(arr1);




