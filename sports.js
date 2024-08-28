
const input=require("readline-sync");
let A = input.question("enter the sports : ").toLocaleLowerCase();
let W = input.question("enter the weather : ").toLocaleLowerCase();
function sunny (){
    if(A === "running"){
        return "wear light shoes and sunglasses";
    }else if(A === "cycling"){
        return "waer light gear ";
    }else if (A === "hiking"){
        return "wear sturdy boot and backpack";
    }else if(A === "swimming"){
        return "swim suit";
    }else{
        return "enter a valid sports"
    }
}
// console.log(sunny());

function rainy (){
    if (A === "running"){
        return "wear to raincot"
    }else if(A === "cycling"){
        return "wear to waterproof care"
    }else if(A === "hiking"){
        return "wear sturdy boot and waterproof backpack";
    }else if(A === "swimming"){
        return "wear to swim suit"
    }else{
        return "enter a valid suit"
    }
}

function cloudy (){
    if (A === "running"){
        return "wear to sport shoes and jacket";
    }else if (A === "cycling"){
        return "wear to a light gear";
    }else if(A === "hicking"){
        return "wear sturdy boots and a waterproof backpack."
    }else if(A === "swimming"){
        return "wear to swim suit";
    }else{
        return "enter a valid sports";
    }
}

function hot (){
    if (A === "running"){
        return "wear to sunglasses and apply sunscream";
    }else if(A === "cycling"){
        return "wear to light gear";
    }else if(A === "hicking"){
        return "wear to sturdy boot and backpack";
    }else if(A === "swimming"){
        return "wear a swimsuit and apply sunscreen."
    }else{
        return "enter a valid sports"
    }
}

function main(){
    if (W === "sunny"){
        console.log(sunny());
    }else if(W === "rainy"){
        console.log(rainy());
    }else if (W === "cloudy"){
        console.log(cloudy());
    }else if (W === "hot"){
        console.log(hot());
    }else{
        console.log("enter the valid weather ");
    }
}
main();