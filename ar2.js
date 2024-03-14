// Write a program to take N numbers from the user and print the frequency of every number

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");

let arr=[];
let i=0;
while(i<n){
let a=input.questionInt(`enter the ${i+1} element : `);
arr[i]=a;
i++;
}
let j=0;
let a=[];
let k=0;
while(j<n){
    let count=1;
     let p=j+1;
     while(p<n){

        if(arr[j]==arr[p]){
           count++;
        }else{

        }
        p++;
     }if(a.includes(arr[j])){

     }else{
        a.push(arr[j])
        console.log(a[k],"-",count,"times");
        k++;
     }
     
    j++;
}