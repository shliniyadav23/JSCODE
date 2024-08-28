// test-02

const input=require("readline-sync");
 let n=input.questionInt("enter the size of array : ");
 let result = "true";
 let arr=[];
 for(let i=0; i<n; i++){
     arr[i]=input.questionInt(`enter the ${i+1} element : `)
    }
    console.log(arr);

//     let arr1=[];
//     let x = n-1;
//  for (let j = 0; j < n; j++){
//     arr1[j] = arr[x];
//     x--;
//  }
//  console.log(arr1);

let arr1=[];
for (let j = 0; j < n; j++){
    arr1.unshift(arr[j])
}
console.log(arr1);
for (let k = 0; k < n; k++){
    if (arr[k] == arr1[k]){
    }else{
        result = "false";
        break;
    }
}console.log(result);

