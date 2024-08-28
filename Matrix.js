const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i=0;
while(i<n){
    arr[i]=[];
    let j=0;
    while(j<n){
        arr[i][j]=input.questionInt(`enter the ${j+1} element : `);
        j++;
    }
    i++;
}
console.log(arr);

let m=input.questionInt("enter the size of array : ");
let arr1=[];
let k=0;
while(k<n){
    arr1[k]=[];
    let l=0;
    while(l<n){
        arr1[k][l]=input.questionInt(`enter the ${l+1} element : `);
        l++;
    }
    k++;
}
console.log(arr1);
let arr2=[];
for(let i=0; i<n; i++){
    arr2[i]=[];
    for(let j=0; j<n; j++){
        arr2[i][j]=arr[i][j] + arr1[i][j];
    }
}

console.log('\n');


console.log("sum arr : ",arr2);