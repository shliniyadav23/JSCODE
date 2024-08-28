        //  array duplicate

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i = 0;
while(i < n){
    arr[i]=input.questionInt(`enter the ${i+1} element : `)
    i++;
}
console.log(arr);

let arr2=[];
let j=0;
while(j<n){
    let p = j+1;
    while(p<n){
        if(arr[j]==arr[p] && !arr2.includes(arr[j])){
            arr2.push(arr[j])
        }
        
        p++;
    }
    j++;
}
console.log(arr2);
