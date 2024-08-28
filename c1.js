
// common element ka sum

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let i=0;
let arr=[];
while(i<n){
    arr[i]=input.questionInt(`enter the ${i+1} element : `);
    i++;
}
let m=input.questionInt("enter the size of array : ");

let j=0;
let arr1=[];
while(j<m){
    arr1[j]=input.questionInt(`enter the ${j+1} element : `);
    j++;
}
console.log(arr);
console.log(arr1);

let arr2=[];
for(let i=0; i<n; i++){
    for(j=0; j<m; j++){
        if(arr[i]===arr1[j]){
            arr2.push(arr[i])
            
        }else{

        }
        
    }
}
console.log(arr2);

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}

console.log("Sum of common elements:", sum);

