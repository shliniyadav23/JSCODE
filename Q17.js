//   const input = require("readline-sync");
//   let n = input.questionInt("Enter the number: ");

//   let i=2;
//   let primeFactorsStr = "Prime factors of : ";

//   while(i<=n){
//     let r;
//     r = n % i;
//     if(r==0)
//     {
//         primeFactorsStr += i + ",";

//     }
//     i++;
//   }
//   console.log(primeFactorsStr);



const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");

let i = 2;  
let primeFactorsStr = "Prime factors of : ";

while (i <= n) {
    if (n % i === 0) {
        
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                
            }
        }

        if (isPrime) {
            primeFactorsStr += i + ", " ;
        }
    }
    i++;
}

 console.log(primeFactorsStr);
