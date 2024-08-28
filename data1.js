
// C - create [name,email,number,age,id,password ]
// R - read 
// E - edit
// D - delete



const input = require("readline-sync");


let data = [];
let master_key = 2003;

function create(name,age,number,password){
    
      data.push({ID:data.length+1,NAME:name,AGE:age,NUMBER:number,PASSWORD:password});
      console.log("user added sucessfully.");
    //   console.log("your ID is :- ",data.ID )
}

function read(name){
      let find_name = data.find((na) => na.NAME == name);
      if(find_name){
            for(let i = 1; i <= 3; i++){
                  let x = input.questionInt("Enter the password : ");  
                  if(x == find_name.PASSWORD){
                        console.log(find_name);
                        break;
                  }else{
                        console.log("Incorrect password, Please try again.");
                  }
            }

      }else{
            console.log("No such user found.");
      }
}


function readAll(password){
      if(password == master_key){
            console.log(data);
      }else{
            console.log("Incorrect password , please try again.");
      }
}

function update_name(name){
      let up_name = data.find((up) => up.NAME == name );
      if(up_name){
            let password = input.questionInt("Enter the password : ");
            if (up_name.PASSWORD == password){
                  let z = input.question("enter the new name : ");
                  up_name.NAME = z;
                  console.log("name updated.");
            }else{
                  console.log("wrong password.");
            }
      }else{
        console.log("no such username.");    
      }
}

function update_age(name1){
      let up_name1 = data.find((up) => up.NAME == name1);
      if(up_name1){
            let password = input.questionInt("Enter the password : ");
            if (up_name1.PASSWORD == password){
                  let z = input.question("enter the new age : ");
                  up_name1.AGE = z;
                  console.log("Age updated.");
            }else{
                  console.log("wrong password.");
            } 
      }else{
            console.log("no such user Age");
      }
}


function update_number(name2){
       let up_name2 = data.find((up) => up.NAME == name2);
       if(up_name2){
            let password = input.questionInt("Enter the password : ");
            if (up_name2.PASSWORD == password){
                  let z = input.question("enter the new number : ");
                  up_name2.NUMBER = z;
                  console.log("number updated.");
            }else{
                  console.log("wrong password.");
            } 
  }else{
      console.log("no such user Number");
}
}



function main(){
      for(;;){
      console.log("Enter 0 to add data.");
      console.log("Enter 1 to see data.");
      console.log("Enter 2 to update the data.");

      let x = input.questionInt("Enter the operation : ");
      if(x === 0){
            let name = input.question("Enter the name : ");
            let age = input.questionInt("Enter the age : ");
            let number = input.questionInt("Enter the number : ");
            let password = input.questionInt("Enter the password : ");
            create(name,age,number,password);
            
      }else if(x === 1){
            console.log("Enter 0 to see individual data.");
            console.log("Enter 1 to see entire data.");
            let y = input.questionInt("Enter the operation : ");
            if(y == 0){
                  let name = input.question("Enter the name : ");
                  read(name);
            }else if(y == 1){
                  let password = input.questionInt("Enter the master key  password : ");
                  readAll(password)
            }else{
                  console.log("invalid operation.");
            }
      }else if(x == 2){
            console.log("enter 0 to edit name.");
            console.log("enter 1 to edit age.");
            console.log("enter 2 to edit number.");
            let xyz = input.questionInt("enter the operation : ");
            if(xyz == 0){
            let name = input.question("enter the name : ");
            update_name(name);
            }else if (xyz == 1){
                  let name1 = input.question("enter the name : ");
                  update_age(name1);
            }else if(xyz == 2){
                  let name2 = input.question("enter the name : ");
                  update_number(name2);
            }
      }else{
            break;
      }
}
}


main();
