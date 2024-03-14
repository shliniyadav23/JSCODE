const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");

//   binaray max number print 

let arr=[];
let i=0;
while(i<n){
arr[i]=input.questionInt("enter the element : ");
i++;
}

let count=0;
let j=0;
let arr1=[];
let k=0;
while(j<=n){
    if(arr[j]==1){
        count++;
    }else{
        arr1[k]=count;
        count=0;
        k++
    }
    j++;
}
console.log(Math.max.apply(null,arr1));