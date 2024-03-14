  
const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");

let arr=[];
let i=0;
while(i<n){
arr[i]=input.questionInt("enter the element : ");
i++;
}

for(i=0; i<n; i++)
{
     let str = "";
    for(j=0; j<arr[i]; j++){
    
    str+=">";
    }
    console.log(str);
}
 