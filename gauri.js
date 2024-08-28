                    //  park charges

const input = require("readline-sync");

// let X = input.questionInt("X for the first hour: ");
// let Y = input.questionInt("Y for every extra hour after the first hour: ");
// let H = input.questionInt("H park car for H hours: ");

// let totalCharges;

// // If parked for 1 hour or less, the total charges will be X
// if (H <= 1) {
//     totalCharges = X;
// } else {
//     // For the first hour, the charge is X
//     totalCharges = X;
    
//     // For every extra hour after the first hour, add Y to the total charges
//     totalCharges += (H - 1) * Y;
// }
// console.log("Total parking charges: " + totalCharges);



                         
  // string to title case

  let T = input.questionInt("Enter the number of test cases: ");
  for (let i = 0; i < T; i++) {
      let S = input.question("Enter the string: ");
  
      function convertToTitleCase(S) {
          
          let words = S.split(" ");
       
          for (let j = 0; j < words.length; j++) {
              let word = words[j];
  
              if (word === word.toUpperCase()) {
                  continue;
              }
  
              words[j] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
  
          let titleCaseString = words.join(' ');
  
          console.log(titleCaseString);
      }
  
      convertToTitleCase(S);
  }
  
