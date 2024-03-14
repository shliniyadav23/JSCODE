const input=require("readline-sync");
console.log("give instruction start or stop");
for(;;){
    let car=input.question("Button : ");
    if(car=="stop"){
    console.log("your car is already stop ");
}else {
    console.log("your car is started");
    for(;;){
        console.log("vrooom vrooom ");
        let car=input.question("your car is running !!!!!! : ");
        if(car=="stop"){
            console.log("your car is stop ");
            break;
        }else{
            console.log("your car is already started ");
        }
    }
}

}