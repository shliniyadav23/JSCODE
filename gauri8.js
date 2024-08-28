
const input=require("readline-sync");
let n = input.questionInt("Enter the size of array : ");

let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = input.questionInt(`Enter the ${i+1} element : `)
}

let m = input.questionInt("Enter the size of array : ");
let arr1 = [];
for(let i = 0; i < m; i++){
    arr1[i] = input.question(`Enter the ${i+1} operation : `).toLowerCase();

    let str = arr1[i].substring(0,3);
    let num;
    
    num = arr1[i].split("").map(Number)
    
for(let k = 0; k < arr.length; k++){
    if(str === "add"){
        arr[k] += num[num.length-1];
    }else if(str === "sub"){
        arr[k] -= num[num.length-1];
    }else if(str === "mul"){
        arr[k] *= num[num.length-1];
    }else if(str === "div"){
        arr[k] /= num[num.length-1];
    }
}
}
console.log(arr);





    


