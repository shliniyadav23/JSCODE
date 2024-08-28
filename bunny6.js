    // //    union and intersection
   
    
 const input = require("readline-sync");
let n = input.questionInt("Enter the size of first array: ");

let arr = []; 
for(let i = 0; i < n; i++) {
    let a = input.questionInt(`Enter the ${i + 1} element: `);
    arr[i] = a;
}

let m = input.questionInt("Enter the size of second array: ");
let arr1 = [];
for(let j = 0; j < m; j++) {
    let b = input.questionInt(`Enter the ${j + 1} element: `);
    arr1[j] = b;
}

console.log(arr);
console.log(arr1);

let arrUnion = [];
let arrIntersection = [];
let i = 0, j = 0;
while (i < n && j < m) {
    if (arr[i] < arr1[j]) {
        arrUnion.push(arr[i]);
        i++;
    } else if (arr[i] > arr1[j]) {
        arrUnion.push(arr1[j]);
        j++;
    } else if (arr[i] === arr1[j]){
        arrUnion.push(arr[i]);
        arrIntersection.push(arr[i]);
        i++;
        j++;
    }else{

    }
}

while (i < n) {
    arrUnion.push(arr[i++]);
}

while (j < m) {
    arrUnion.push(arr1[j++]);
}

console.log("Union :", arrUnion);
console.log("Intersection :", arrIntersection);
