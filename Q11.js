// question 11.(1)

//  const input = require("readline-sync");
//  let n= input.questionInt("enter the value of n  : ");
// let i=1;
// while (i<=n)  {
//    let j=1;
//     let str = "";
//     while(j<=i)
//     {
    
//        str =str+"* "  
//          j++;
        
//     }
//     i++;
//       console.log(str,"\n") }

// *
// * *
// * * *
// * * * *
// * * * * *


// question 11. (3)

// const input = require("readline-sync");
// let n= input.questionInt("enter the value of n : ");
// let i=1;
// while (i<=n) {
//     let j=n;
//     let str = "";
//     while(j>=i){
//         str = str+"* "
//         j--;
//     }
//     i++;
//     console.log(str,"\n");
// }

// * * * * *
// * * * *
// * * *
// * *
// *


// question 11.(4)


// const input = require("readline-sync");
// let n = input.questionInt("enter the value of n:");
// let i = 1;
// let count = 1;
// while ( i<=n )
// {
//      let j=1
//      let str = ""
     
//      while(j<=i)
//      {
//          str= str + count + " "
        
//        j++;
//        count++;

//      }

//      console.log(str);
//      i++;
// }

// 1
// 2 3
// 4 5 6
// 7 5 9 10


//   question 11.(5)

//  const input = require("readline-sync");
//  let n = input.questionInt("enter the value of n : ");
//  let i=0;
//  let s=2;
//  while(i<=n-1){
//     let j=0;
//     let str="";
//     while(j<=i){
//         if(i == 0){
//             str += 0;
//         } else {if(j==0){
//         str+=(s**i) +" ";
//     }else{
//         str+=(s**(i+1))+" ";
//     }
// }
//     j++;
//     }
//     i++;
//     console.log(str);
//  }

//  0
// 2 4
// 4 8 8
// 8 16 16 16



    // question 11.(6)

//   const input = require("readline-sync");
//  let n = input.questionInt("enter the value of n : ");
// let i=1;
// while (i<=n) {
//     let j=1
//     let str = "";

//     while (j<=i) {
//          str+= j+ " "
//         j++;
//     }

//        j=i-1;
//        while(j>0){
//          str+= j + " "
//         j--;
//        }
//        i++;
//        console.log(str);

//     }

//     1
//     121
//     12321
//     1234321

