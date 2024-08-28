const input=require("readline-sync");
 let TW = input.question("enter the details : ").split(" ").map(Number);
//  console.log(typeof TW[0]);

let F = TW[0]*1.8 + 32;
function Notrainy (){
    if(F <= 50){
        return `${F}  wear a heavy coat`;
        
    }else if(F <= 68){
        return `${F} wear a light jacket`;
        
    }else{
        return `${F}  wear light clothing`;
    }     
    
}
// console.log(Notrainy());

function rainy(){
      if(F <= 50){
        return `${F}  wear a heavy coat and bring an umbrella`
        ;
      }else if ( F <= 68){
        return `${F} wear a light jacket and bring an umbrella.
        `;
      }else {
        return `${F} wear light clothing and bring an umbrella.
        `;
}
}
// console.log(rainy());

function main(){
    if(TW[1]== 0){
       console.log(Notrainy());
    }else if(TW[1]== 1){
        console.log(rainy());
    }else{
        console.log("enter valid weather ");
    }
}
main();
