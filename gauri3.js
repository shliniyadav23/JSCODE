       
    //    isogram

const input=require("readline-sync");
// let w = input.question("enter the words : ").split("");
// console.log(w);
// let gauri = true;
// for(let i=0; i<w.length; i++){
//     for(let j=i+1; j<w.length; j++){
//         if(w[i]==w[j]){
//             gauri = false;
//               break;
//         }else{

//         }
//     }
//     if(!gauri){
//         break;
//     }
// }
// console.log(gauri);


// let w = input.question("enter the words : ").split("")
// let result = true;
// let arr = [];
// for(let i=0; i< w.length; i++){
//     if(arr.includes(w[i])){
//       result = false;
//       break;
//     }else{
//         arr.push(w[i])
//     }
// }
// console.log(result);


//    class score

// let score = input.questionInt("enter the your score : ");
// let p = input.questionInt("enter the size of array : ");
// let i = 0;
// let arr = [];
// while(i < p){
//     arr[i]=input.questionInt(`enter the ${i+1} peer score : `);
//     i++;
// }
// let sum = 0;
// let t;
// for(let j=0; j < p; j++){
//     sum += arr[j];
    
// }
// t = sum/p;
// console.log(t);
// if(score > t){
//     console.log("congratulation");
// }else{
//     console.log("keep practicing");
// }



// let N = input.questionInt("enter the number of n items : ");
// let arr=[];
// for(let i = 0; i < N; i++){
//    let items = {};
//    let key = input.question("enter the key : ");
//    let value = input.questionInt("enter the price : ");
//    items[key] = value;
//    arr.push(items);
// }
// console.log(arr);
// let bunny = {};
// for(let j = 0; j < N; j++){
//     let Obj = arr[j];
//     let keys = Object.keys(Obj);
//     if(Obj.hasOwnProperty(keys)){
//         if(bunny.hasOwnProperty(keys)){
//              bunny[keys] += Obj[keys] ;
//         }else{
//             bunny[keys] = Obj[keys];
//         }
//     }
// }
// console.log(bunny);