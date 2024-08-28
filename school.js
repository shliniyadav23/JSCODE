
const input=require("readline-sync");
let N = input.questionInt("enter the number of students : ");
let R = input.question("enter the roll number of students :" ).split(" ").map(Number);
let S = input.question("enter the score of students : ").split(" ").map(Number);
// console.log(N);
console.log(R);
console.log(S);

let oddsum = 0;
let evensum = 0;

if(N % 2 !== 0){
    var max = Math.max(...R);
    let index = R.indexOf(max);
    R.splice(index,1);
    S.splice(index,1);
}else {
    for (let i = 0; i < R.length; i++){
        if (R[i] % 2 == 0){
            oddsum += S[i];
        }else {
            evensum += S[i];
        }
    }
}


if (oddsum > evensum){
    console.log("ODD");
}else if (oddsum == evensum){
    console.log("TIE");
}else{
    console.log("EVEN");
}