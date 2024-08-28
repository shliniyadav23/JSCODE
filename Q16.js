

// const input = require("readline-sync");

// let n = input.questionInt("Enter the number: ");
// let count = 0;

// for (let i = 2; i < n; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
            
//         }
//     }

//     if (isPrime) {
//         count++;
   
//     }
//    }
// console.log(`Count of prime numbers is: ${count}`);



   
const input = require("readline-sync");

let n = input.questionInt("Enter the number: ");
let count = 0;

for (let i = 2; i < n; i++) {
    
    for ( j = 2; j < i; j++) {

        if (i % j == 0) {
             break;
        }
    }

    if (j == i) {
        count++;
    }
}

console.log("Count of prime numbers is:", count);


