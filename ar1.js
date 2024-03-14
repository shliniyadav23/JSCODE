// Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.



const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");

let arr=[];
let i=0;
while(i<n){
let a=input.questionInt("enter the element : ");
arr[i]=a;
i++;
}
let k=input.questionInt("enter the value of k : ");
let j=0;
let gauri="NO";
while(j<n){
    
    if(arr[j]==k){
        gauri = "YES";
        break;
    }else{

    }
    j++;
}
console.log(gauri);