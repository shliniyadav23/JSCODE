 
        //    question2
const input = require("readline-sync");

// let T = input.questionInt("Enter the number of test cases: ");

// for (let t = 0; t < T; t++) {
//     let M = input.questionInt("Enter the threshold value for applying discounts: ");
//     let N = input.questionInt("Enter the number of items: ");
//     let totalCost = 0;
 
// }


    //   question3

    // let B = input.question("Enter the binaray string : ").split("");
    // console.log(B);
    // let S = input.questionInt("Enter the start number : ");
    // let E = input.questionInt("Enter the End number : ");
    // for(let i = S; i < E; i++){
    //     if(B[i]==="0"){
    //         B[i] = "1";
    //     }else{
    //         B[i] = "0";
    //     }
    // }
    // console.log(B);

    
    // question pizza

    // let N = input.questionInt("Enter the number of friends : ");
    // let X = input.questionInt("Enter number of slice : ");
    // let P = 4;
    // let T = N*X;
    // let P1 = Math.floor(T/P);
    // if(T % P!==0){
    //     P1++;
    // }
    // console.log(P1);

    // let N = input.question("Enter the friends and slice : ").split(" ");
    // let T = N[0] * N[1];
    // let P = Math.ceil(T/4);
    // console.log(P);


    // LCONNONES Question7

//     let B = input.question("Enter the binarary number : ").split("");
//     console.log(B);
//     let arr = [];
//     let count=0;
//     for(let i = 0; i < B.length; i++){
//         if(B[i] === "1"){
//           count++;
//         }else{
//              count=0;
//         }
//         arr.push(count)
//     }
// let max = Math.max(...arr);
// console.log(max);


// question10


// let s = input.question("enter the string : ");
// let mapCount = 0;
// let pieCount = 0;
// for(let i = 0; i < s.length; i++){
//     if(s.substring(i,i+3)==="map"){
//         mapCount++;
//     }else if(s.substring(i,i+3)==="pie"){
//         pieCount++
//     }else{

//     }
// }
// let T = mapCount + pieCount;
// console.log(T);





// question 12 triangle 

// let s = input.question("Enter the sides of triangle : ").split(" ").map(Number);
// console.log(s);
// let result = "Yes";
// for(let i = 0; i < s.length; i++ ){
//     if(s[0]+s[1]>s[2] && s[1]+s[2]>s[0] && s[2]+s[0]>s[1] ){
    
//     }else{
//         result = "No";
//         break;
//     }
// }
// console.log(result);




// abaacbbdacbb 


let a = input.question("enter the string : ").split("");

let obj = {};
for (let i = 0; i < a.length; i++){
    let char = a[i];
    if(obj[char] === undefined){
        obj[char] = 1;  
    }else{
        obj[char]++;
    }
}
console.log(obj);


let max_freq = 0;
let min_freq = Infinity;
let highest_char = "";
let lowest_char = "";


let chars = Object.keys(obj);
// console.log(obj["a"]);
for(let i = 0; i < chars.length; i++){
    let charecter = chars[i];
    if(obj[charecter] > max_freq || obj[charecter] >= max_freq && charecter.charCodeAt(0) > highest_char.charCodeAt(0)){
        max_freq = obj[charecter];
        highest_char = charecter;
    }else if(obj[charecter] < min_freq || obj[charecter] <= min_freq && charecter.charCodeAt(0) < lowest_char.charCodeAt(0)){
        min_freq = obj[charecter];
        lowest_char = charecter;
    }
}


let str1 = "";
for(let i = 0; i < a.length; i++){
    if(a[i] === highest_char){
        str1 += lowest_char;
    }else{
        str1 += a[i];
    }
}
console.log(str1);
