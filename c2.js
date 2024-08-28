const input = require("readline-sync");

// function greet(name){
//     if(name){
//         return "hello" + " "  name;
//     }else{
//         return "hello there !"
//     }
// }
// let n= input.question("enter the name :");
// console.log( greet(n));


// function reverseString() {
//     let s = input.question("Enter the string: ");
//     let reversedString = s.split('').reverse().join('');
//     return reversedString;
// }

// console.log(reverseString());



// function sumArray(){
//     let n = input.questionInt("enter the size of array : ");
//     let arr = [];
//     let i = 0;
//     while(i < n){
//         arr[i]= input.questionInt("enter the element : ");
//         i++;
//     }
//     console.log(arr);
//     let sum = 0;
//     for(let i = 0; i<n; i++){
//      sum = sum + arr[i];
//     }
//      return sum;
// }
// console.log(sumArray());




// function factorial() {
//     let n = input.questionInt("Enter the number: ");
//     let result = 1;

//     if (n >= 0) {
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     } else {
//         return "Factorial is not defined for negative numbers.";
//     }
// }

// console.log("Factorial:", factorial());


// function isEven(){
//     let n = input.questionInt("enter the number : ");
//     if(n%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven());


// function isPalindrome(){
//     let n = input.question("enter the string : ");
//     let d = n.split('').reverse('').join('');
//     if(d===n){
//         return "true";
//     }else{
//         return "false";
//     }
// }
// console.log(isPalindrome());


// function Max(){
//     let n = input.questionInt("enter the size of array : ");
//     let arr = [];
//     let i = 0;
//     while(i < n){
//         arr[i]=input.questionInt("enter the element : ");
//         i++;
//     }
//     let max = arr[0];
//     for(let i = 0; i<n ; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }else{
            
//         }
        
//     }
//     return max;
    
// }
// console.log(Max());


// function fibonacci(){
//     let n = input.questionInt("enter the number : ");
//     let a = 0;
//     let b = 1;
//     let i = 0;
//     let s;
//     while(i <= n){
//         console.log(a);
//         s = a+b;
//         a = b;
//         b = s;
//         i++;
//     }
// }
// fibonacci();


// function power(){
//     let b = input.questionInt("enter the number : ");
//     let p = input.questionInt("enter the power of number : ");
//     let result = Math.pow(b , p);
//     return result ;
// }
// console.log(power());



// function countVowels() {
//      let inputString = input.question("enter the words : ")
//     let count = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         let character = inputString[i];
//         if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels()); 


// function capitalizeWords() {
//     let inputArraySize = input.questionInt("Enter the size of the array: ");
//     let capitalizedArray = [];

//     for (let i = 0; i < inputArraySize; i++) {
//         let word = input.question("Enter word " + (i + 1) + ": ");
//         let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//         capitalizedArray.push(capitalizedWord);
//     }

//     return capitalizedArray;
// }

// console.log(capitalizeWords());


// function sumDigit(){
//     let n = input.questionInt("enter the number : ");
//     let p = n;
//     let sum = 0;
//     while(p > 0){
//         let r = p%10;
//         sum = sum + r;
//         p = Math.floor(p/10);
        
//     }
//     return sum;
// }
//  console.log(sumDigit());



// function findDuplicates(){
//     let n = input.questionInt("enter the size of array : ");
//     let arr = [];
//     let i = 0;
//     while(i < n){
//         arr[i] = input.questionInt("enter the element : ");
//         i++;
//     }
//     console.log(arr);
//     let arr1 = [];
//     for(let p=0; p<n; p++){
//         for(let j=p+1; j<n; j++){
//             if(arr[p]==arr[j] && !arr1.includes(arr[p])){
//              arr1.push(arr[p])
//             }
//         }
//     }
//      return arr1;
// }
// console.log(findDuplicates());


// Object

// let obj1 = {a: 1, b: 2};
// let obj2 = {b: 3, c: 4};
// console.log(mergeObjects(obj1,obj2)); 



// let obj1 = {a: 1, b: 2};
// let obj2 = {b: 3, c: 4};
// let mergeObjects = {...obj1 , ...obj2};
// console.log(mergeObjects);



let arr = [];

for(;;){
    let a = input.questionInt("enter the operation : ");
    if(a === 0){
let name = input.question("enter the name : ");
let age  = input.questionInt("enter the age : ");
let gender = input.question("enter the gender :");
arr.push({Name : name , Age : age , Gender : gender})
}else {
    break;
}
}
console.log(arr);