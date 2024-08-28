
// QUESTION 12 (1)

// const input = require("readline-sync");
// let t = input.questionInt("enter the value : ");
// let c = 1;
// for (let i = 1; i <= t; i++)
// {
//     let str = "* ";
//         console.log(str.repeat(c));
//         c = c + 2;
    
// }


// question 12.(1)

// const input = require("readline-sync");
// let a = input.questionInt("enter the value : ");
// let c = 1;
// for (let i = 1; i <= a; i++){
//     let str = "";
//     for (let j = 1; j <= c; j++){
    
//         str+="* "
    
//     }
//     c = c + 2;
//     console.log(str);
//     console.log("\n");
// }


// *
// * * *
// * * * * *
// * * * * * * *


// QUESTION 12 (2)
    

//  const input=require("readline-sync");
//  let n=input.questionInt("enter the number : ");
//  let a;

//     for(let i=1; i<=n; i++)
//     {
//     let str="";
//     a=2*i-1;
//     for(let j=1; j<=a; j++)
//     {
//         str+="* ";
        
//     }
//     console.log(str);

//   }
//  n=n-1;
//  for(let i=1; i<=n; i++)
//  {
//     let str="";
//     a=a-2;
//     for(let j=1; j<=a;j++)
//     {
//     str+="* ";
  
//     }
//     console.log(str);
//  }



// QUESTION 12 (3)

      //  const input=require("readline-sync");
      // let n=input.questionInt("enter the number : ");
      // let a=2;
      // let str="*";
      // let str1="*";
      // for(let i=1; i<=n; i++){
      //   if(i==n){
             
      //        console.log(str.repeat(a));
      //   }else{
      //       let star = str + " ";
      //       console.log(star.repeat(a));
      //       str+= "*";
      //   }
      // }
      //    let b
      //    b=n-1;
      //    for(let i=b; i>0; i--){
      //        let star1 = str1.repeat(b);
      //        let star2 = star1 + " ";
            
            
      //       console.log(star2.repeat(a));
      //       b=b-1;
      //    }
    


      // quetion 12(4)


      //     const input= require("readline-sync");
      //     let n=input.questionInt("enter the number : ");
      //      let s;
      //      let str= "";
      //      let i = 1;
      //      while(i<=n)
      //  {
      //       s=n;
      //       let j=1;
      //        while(j<=i)
      //       {
      //             str+=s;
      //             s=s-1;
      //             j++;
      //       }
      
      //       for(s=s+2; s<=n; s++)
      //       {
      //             str+=s + "";
              
      //        }    
      //            console.log(str);
      //                   str="";
      //                i++;
      //  }  
               
      //       let k = n-1;
      //       while(k>0)
      //       {
      //             let str="";
      //             let s=n;
      //             let j=1;
      //             while(j<=k)
      //             {
      //                   str+= s;
      //                   s=s-1;
      //                   j++;
      //             }
      //             for(s=s+2;s<=n; s++)
      //             {
      //             str+= s+ "";
      //             }
      //             console.log(str);
      //             str="";
      //             k--;
      //       }





  //  question 12 (5)

//           const input=require("readline-sync");
//           let n=input.questionInt("enter the number : ");
//           let x = Math.floor(n/2) + 1
//           let a=0;
//           let b=n+1;
          
//           for(i=1;i<=x;i++){
//             let str="";
//             for(j=1;j<=n;j++){

            
//             if (i==1||i==n) {
                  
//                   str+= 0 + " ";
                
//             } else
//              if(j==1||j==n||j<=a||j>=b)
//              {
//                str+=  "x ";
     
//             }else{
                  
//                   str+=  0 + " ";
            
//             }
//        }
//       a++;
//       b--;
            
//         console.log(str);

//    }
// a = a - 2;
// b = b + 2;
// for (let i =1; i <= n - x; i++){
//       str = "";
//       for (let j = 1; j <= n; j++){
//             if (i == n - x){
//                   str += 0+" ";
//             }else {
//                   if(j==1||j==n||j<=a||j>=b){
//                         str += "x"+" ";
//                   }else {
//                         str += 0+" ";
//                   }
//             }
//       }console.log(str);
// }


            
      // question 12 (7)

      // const input=require("readline-sync");
      // let n= input.questionInt("enter the number:");
      // let a=n;
      // let i=1;
      // while(i<=n){
      //       let str="";
      //       let j=1;
      //       let b=n;
      //       while(j<=b){
      //             str+=b;
      //             j++;
      //             b--;
      //       }
      //       console.log(str);
      //       i++;
      //       a--;
      // }
