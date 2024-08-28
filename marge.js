
const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");

let arr=[];
for(let i=0; i<n; i++){
    let a=input.questionInt(`enter the ${i+1} element : `);
    arr[i]=a;
}
let m=input.questionInt("enter the size of array : ");
let arr1=[];
for(let i=0; i<m; i++){
    let b=input.questionInt(`enter the ${i+1} element : `);
    arr1[i]=b;
}
let arr2=[];
let i=0, j=0, k=0 ;
while(i<n && j<m  ){
    if(arr[i] < arr1[j]){
        arr2[k++] = arr[i++];
    }else{
        arr2[k++] = arr1[j++];
    }
}
while(i<n){
    arr2[k++] = arr[i++];
}
while(j<m){
    arr2[k++] = arr1[j++];
}
console.log(arr2);


