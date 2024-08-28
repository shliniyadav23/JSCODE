
const input = require("readline-sync");

let data = [];

let master_key = 2003;


function creatdata(name,age,email,mobile,password){
      data.push({ID : data.length+1,name : name,age : age,email : email,mobile : mobile,password : password});
    //   console.log(data);
      
}


function readdata(name){
    let user = data.find((na) => na.name == name);
    if(user){
          for(let i = 1; i <= 3; i++){
                let x = input.questionInt("Enter the password : ");  
                if(x == user.password){
                      console.log(user);
                      break;
                }else{
                      console.log("Incorrect password, Please try again.");
                }
          }

    }else{
          console.log("No such user found.");
    }

}

function ReadAlldata(password){
   
    if(password === master_key){
        console.log(data);
    }else{
        console.log("Incorrect password , please try again.");
    }
}




function editdata(user){
    console.log("User found. You can edit the details now.");
    console.log("press '0' to edit name.");
    console.log("press '1' to edit age.");
    console.log("press '2' to edit email.");
    console.log("press '3' to edit mobile number.");
    console.log("press '4' to edit password.");
    let x = input.questionInt("enter the operation : ");
    if(x == 0){
        let newName = input.question("Enter the new user name: ");
        user.name = newName;
        console.log("User details updated successfully.");

    }else if(x == 1){
        let newAge = input.questionInt("Enter the new age: ");
        user.age = newAge;

    }else if(x == 2){
        let newEmail = input.question("Enter the new email: ");
        user.email = newEmail;
        console.log("User details updated successfully.");

    }else if(x == 3){
        let newMobile = input.questionInt("Enter the new mobile number: ");
        user.mobile = newMobile;
        console.log("User details updated successfully.");

    }else if(x == 4){
        let newPassword = input.question("Enter the new password: ");
        user.password = newPassword;
        console.log("User details updated successfully.");

    }else{
        console.log("invalid operation.");
    }


}


function deletedata(name,password){
     let user = data.findIndex(user => user.name === name && user.password === password);
     if(user != -1){
        data.splice(user,1);
        console.log("data has been deleted.");
     }else{
        console.log("User not found or password is incorrect.")
     }
}


function maindata(){

for(;;){

 console.log("welcome to my program.");
 console.log("enter the operation 1 create the userdata.");
 console.log("enter the operation 2 read the data.");
 console.log("enter the operation 3 edit the data.");
 console.log("enter the operation 4 delete the user data");

    let operation = input.question("enter the operation : ");

    if(operation === "1"){
        let name = input.question("enter the user name : ");
      let age = input.questionInt("enter the age : ");
      let email = input.question("enter the email : ");
      let mobile = input.questionInt("enter the mobile number : ");
      let password = input.questionInt("enter the password : ");
        creatdata(name,age,email,mobile,password);
        
    }else if(operation === "2"){
       
        console.log("Enter 0 to see individual data.");
        console.log("Enter 1 to see entire data.");
        let x = input.questionInt("Enter the operation : ");
         
        if(x == 0){
        let name = input.question("enter the user name : ");
        // let password = input.questionInt("enter the password : ");
        readdata(name);
        }else if(x == 1){
            let password = input.questionInt("Enter the master key  password : ");
            ReadAlldata(password)
        }else{
            console.log("Invalid operation.");
        }
        
    }else if(operation === "3"){
        console.log("User found. Here are the details:");

        let name = input.question("enter the old user name : ");
        let password = input.questionInt("enter the password : ");
        let user = data.find(user => user.name === name && user.password === password);
         
        if(user){
            editdata(user)
        }else {
        console.log("User not found or password is incorrect.");
    }
        
    }else if(operation === "4"){
        if(data.length === 0){
            console.log("There is no record of database.");
        }else{

        let name = input.question("enter the old user name : ");
        let password = input.questionInt("enter the password : ");
        deletedata(name,password);
        }
    }else{
        console.log("enter a valid operation.");


    }
    
}



}

maindata()





