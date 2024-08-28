
const input = require("readline-sync");

let school = []

function addRec(rec,A) {
    A.push(rec) 
}

function displayRec(A,mNo) {
    for(let i = 0 ; i < A.length ; i++){
        
       
        if (A[i].mobileNo === mNo){
            console.log("\n",A[i],"\n");
        }
        else{
            console.log("\nRecord not found\n")
    }
}   
}

function updateRec(A,n,rec){
    for(let i = 0 ; i < A.length ; i++){
        if (A[i].mobileNo === n){
            A[i] = rec;
            console.log("\nRecord updated successfully\n")
        }   
    }
}



function delRec(A,M){
    for(let i = 0 ; i < A.length ; i++){
        if (A[i].mobileNo === M){
            A.splice(i,1);
            console.log("\nRecord deleted successfully\n");
        }  
    }
}


console.log("Welcome to the school")
console.log("press 1 for addmission ")
console.log("press 2 for display  the infromation of student")
console.log("press 3 for update the information of student")
console.log("press 4 for delete the information of student")

while(true) {  
    let choice = input.question("Enter your choice: ")
    if (choice === "1"){
        rec = {} 
        rec.firstName = input.question("Enter Firstname :-  ")
        rec.lastName = input.question("Enter lastname:- ")
        rec.class = input.question("Enter class:- ")
        rec.mobileNo = input.question("Enter mobile number:- ")
        addRec(rec,school)
        console.log(school)
    }
    else if (choice === "2"){
        if(school.length === 0){
            console.log("\nThere is no record in the databse\n")
        }
        let mNo = input.question("Enter mobile number: ")
        displayRec(school,mNo);
    }   
    else if(choice === "3"){
        let rec = {}

        oldM = input.question("Enter old mobile number:-  ")
        rec.mobileNo = input.question("Enter new mobile number: ")
        rec.firstName = input.question("Enter new Firstname: ")
        rec.lastName = input.question("Enter new lastname: ")
        rec.class = input.question("Enter new class: ")
        updateRec(school,oldM,rec);
    }
    else if(choice === "4"){
        if(school.length === 0){
            console.log("\nThere is no record in the databse\n")
        }
        let mNo = input.question("Enter mobile number of the record you want to delete:  ")
        delRec(school,mNo);
    }
    else{
        console.log("Enter valid choice")
    }
    let cn = input.question("Do you want to continue? (y/n) ");
    if (cn === "y"){
        continue;
    }
    else if(cn === "n"){
        break;
    }
    else{
        console.log("Enter valid choice")
    }

}
