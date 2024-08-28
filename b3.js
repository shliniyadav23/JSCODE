        //   array duplicate

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
for(let i=0; i<n; i++){
    let a=input.questionInt(`enter the ${i+1} element : `);
    arr[i]=a;
} 

let m=input.questionInt("enter the size of array : ");
let arr1=[];
for(let j=0; j<m; j++){
    let b=input.questionInt(`enter the ${j+1} element : `);
     arr1[j]=b;
}
console.log(arr)
console.log(arr1)

let arr2=[];
for( i=0; i<n; i++)
{
    for(j=0; j<m; j++)
    {
        if(arr[i]==arr1[j])
        {
            arr2.push(arr[i])
            
            
        }

    }
}
console.log(arr2)
