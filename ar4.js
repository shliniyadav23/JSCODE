
 
//   pattern

 const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i=0;
while(i<n){
    arr[i]=input.questionInt(`enter the ${i+1} element : `)
    i++;
}
let str="";
for(let i=0; i<n; i++){
    for(let j=0; j<arr[i]; j++){
        str+= ">";
    }
    str+= "\n";
}
console.log(str);
 