
const input=require("readline-sync");

let bloodBAnk = [];

function blood_donation(naam,khoon,tarikh){
    bloodBAnk.push({donor : naam , bloodtype : khoon, date : tarikh})
    console.log("blood donation entry registry.");
    console.log(bloodBAnk);
}


function remove_blood_donation(naam){
    let index = bloodBAnk.findIndex( item => item.donor === naam)
    if (index !== -1){
        bloodBAnk.splice(index,1);
        console.log("blood donation entry has been deleted.");
    }else{
        console.log("no such blood donation entry.");
    }
    console.log(bloodBAnk);
}

// blood_donation("mayank","o+","24-5-2024")
// remove_blood_donation("mayank")
// console.log(bloodBAnk);

function check_availablity(khoon){
    let available = bloodBAnk.some( item => item.bloodtype === khoon);
    if (available){
        console.log("available");
    }else {
        console.log("not available");
    }
}

function reception(naam,khoon,tarikh){
    console.log("enter '0' for blood donation.");
    console.log("enter '1' to remove blood donation.");
    console.log("enter '2' to check availablity.");
    console.log("enter '3' to exit the programm.");

    for(;;){
        let o = input.questionInt("enter the operation : ");
        if (o === 0){
            let naam = input.question("enter the name of the donor : ");
            let khoon = input.question("enter the blood type ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') : ");
            let tarikh = input.question("enter the date (yyyy-mm-dd) : ");
            blood_donation(naam,khoon,tarikh);
        }else if (o === 1){
            let naam = input.question("enter the name of the donor : ");
            remove_blood_donation(naam);
        }else if (o === 2){
            let khoon = input.question("enter the blood type ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') : ");
            check_availablity(khoon);
        }else if (o === 3){
            console.log("exiting the programm....");
            break;
        }else {
            console.log("enter a valid operation.");
        }
    }
}

reception();