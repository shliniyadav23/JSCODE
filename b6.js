const input = require("readline-sync");
let a = input.questionInt("Enter the first number: ");
let b = input.questionInt("Enter the second number: ");
let c = input.questionInt("Enter the third number: ");
let min = a;
if (b < min) {
    min = b;
}
if (c < min) {
    min = c;
}

let hcf = 1;
for (let i = 1; i <= min; i++) {

    if (a % i == 0 && b % i == 0 && c % i == 0) {
        hcf = i; 
    }
}

console.log("HCF of:", hcf)
