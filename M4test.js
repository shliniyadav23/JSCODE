
// Vowel replacement

const input = require("readline-sync");

//  let inputString = input.question("Enter the string : ")

// inputString = inputString.replace(/a/gi, '#');

// inputString = inputString.replace(/e/gi, '&');

// inputString = inputString.replace(/i/gi, '!');

// inputString = inputString.replace(/o/gi, '@');

// inputString = inputString.replace(/u/gi, '$');

// console.log(inputString); 


// capital first letter

// let words = input.question("Enter the string : ").split(" ");

// console.log(words);
// for (let j = 0; j < words.length; j++) {
//     let word = words[j];

//     // if (word === word.toUpperCase()) {
        
//     // }

//     words[j] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// let String = words.join(' ');

// console.log(String);


 
// revers words

// let str = input.question("Enter the string : ")
// console.log(str);

// let arr = str.split(" ").reverse().join(' ');
// console.log( arr);


//    object

// let n = input.questionInt("enter the number of data : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let name = input.question("enter the name : ");
//     let grade = input.questionInt("enter the grade : ");
//     arr.push({"Name" : name , "Grade" : grade});
// }
// console.log(arr);


// let x = input.questionInt("enter the targate grade : ");
// let find = arr.find((item) => item.Grade === x);
// if(find){
//     console.log(find);
// }else{
//     console.log("no match");
// }



// Problem 1: The Curious Case of the Collatz Sequence (20 marks)


// let n = input.questionInt("Enter the positive number : ");

// let count = 0;
// if(n == 0){
//     console.log("repeat steps:",0);
// }else{
// for (let i = 1; n !== 1; i++) {
//     if (n % 2 === 0) {
//         n = n / 2;
//     } else {
//         n = n * 3 + 1;
//     }
//     count++;
// }
// console.log("repeat steps:",count);
// }



// Problem 2: Contact List Formatter 


// let arr = [];
// let n = input.questionInt("enter the number of contacts : ");
// for(let i = 1; i <= n; i++){
// let str = "";
// let name = input.question("enter the full detail {fullname,country code-number} : ").split(",");
// console.log(name);
// let splitname = name[0].split(" ");
// console.log(splitname);
// let number = name[1].split("-");

// if(number[0] == 91){
//     str += number[1] + ":" + splitname[1] + " " + splitname[0] + "(INDIA)"; 
//     arr.push(str)
// }else{
//     str += name[1] + ":" + splitname[1] + " " + splitname[0] + "(NRI)"; 
//     arr.push(str)
// }
// }
// console.log(arr);



// shopping cart problem 3


// let n = input.questionInt("Enter the number of cart items : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let ID = input.questionInt("enter the id number : ");
//     let Quantity = input.questionInt("enter the quantity : ");
   
//     arr.push({"id" : ID,"quantity": Quantity})
// }
// console.log(arr);

// let newitem = input.questionInt("Enter the new item : ");
// let newQ = input.questionInt("Enter the new quantity : ");

// let finditem = arr.find((item) => item.id == newitem);
// if(finditem){
//     finditem.quantity = newQ;
// }else{
//     arr.push({"id": newitem, "quantity": newQ})
// }
// console.log(arr);



// let n = input.questionInt("Enter the order lists : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let Orderid = input.questionInt("Enter the oderid number : ");
//     let City = input.question("enter the city for diliverd : ");
//     let Product = input.question("Enter the product name : ")
//     arr.push({"orderId" : Orderid, "city" : City, "productName" : Product})
// }

// console.log(arr);

// let Targetcity = input.question("Enter the target city : ");

// let target = arr.filter((item) => item.city === Targetcity);

// let targetOrderIds = target.map((item) => item.orderId);

// console.log("Order ID of target city: ", targetOrderIds);



// problem 4 updating payment status(object)



// let n = input.questionInt("Enter the orders : ");
// let arr = [];

// for(let i = 0; i < n; i++){
//     let OderId = input.questionInt("enter the order id : ");
//     let City = input.question("enter the city name : ");
//     let Product = input.question("enter the product name : ");
//     let Method = input.question("enter the which type card : ");
//     let Transactionid = input.questionInt("enter the transaction id number : ")
//     let Status = input.question("enter the status : ");
//     let paymentDetails = {
//         "method": Method,
//         "transactionId": Transactionid,
//         "status": Status
//     };
//     let order = {
//         "orderId": OderId,
//         "city": City,
//         "productName": Product,
//         "paymentDetails": paymentDetails
//     };

    
//     arr.push(order)
// }
// console.log(arr);

// let targetOId = input.questionInt("enter the target id number : ");
// let newStatus = input.question("enter the new status : ")

// let avi = arr.find((od) => od.orderId == targetOId);
// if(avi){
//     avi.paymentDetails.status = newStatus;
// }else{
//     console.log("no such order.");
// }
// console.log(arr);


// File Type


// let a = input.question("enter the file name : ").toLowerCase();
// let det = a.split(".");
// if(det[1] == "doc" || det[1] == "docx" || det[1] == "pdf" || det[1] == "txt"){
//     console.log("Document");
// }else if(det[1] == "jpg" || det[1] == "jpeg" || det[1] == "png" || det[1] == "gif"){
//     console.log("Image");
// }else if(det[1] == "mp3" || det[1] == "wav" || det[1] == "ogg" || det[1] == "aac"){
//     console.log("Audio");
// }else if(det[1] == "mp4" || det[1] == "avi" || det[1] == "mkv" || det[1] == "wmv"){
//     console.log("Video");
// }else{
//     console.log("Invalid file name.");
// }








// let arr = ["1","0","0","1","1","0","0"];

// let arr1 = [];

// let arr2 = [];
// let arr3 = [];

// for(let i = 0; i < arr.length; i++){
//       if(arr[i]=== "0"){
//         arr1.push(arr[i])
//       }else{
//         arr2.push(arr[i])
//       }
// }

// arr3.push(arr1+" "+ arr2);

// console.log(arr3);


// let c = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === "0"){
//         let temp = arr[i];
//         arr[i] = arr[c];
//         arr[c] = temp
//         c++;
//     }
// }

// console.log(arr);




// binarary max


// let n = input.questionInt("Enter the size of array : ")

// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = input.question(`Enter the ${i + 1} element: `);
// }
// console.log(arr);

// let count = 0;
// let maxcount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "1") {
//         count++;
//         if (count > maxcount) {
//             maxcount = count;
//         }
//     } else {
//         count = 0;
//     }
// }

// console.log(maxcount);



// module4 openbook 4july




// let n = input.questionInt("Enter the positive number : ");

// let count = 0; 

// for(let i = 1; i <= n; i++){
//     if(n == 1){
//         count = 0;
//     }else if(n % 2==0){
        
//         count++;
//     }else{
//         n = n * 3 + 1;
//     }
// }

// console.log(count);



// let cartitems = [];

// let n = input.questionInt("enter the number of cartitems : ");

// for(let i = 0; i < n; i++){

//     let id = input.questionInt("enter the id number : ");
//     let quantity = input.questionInt("enter the quantity : ");

//     cartitems.push({id : id,quantity : quantity})

// }

// console.log(cartitems);

// let itemId = input.questionInt("enter the target itemid : ");
// let newQuantity = input.questionInt("enter the new quantity : ");

// let find = cartitems.find(item => item.id === itemId );

// if(find){
//     find.quantity = newQuantity
// }else{
//     cartitems.push({itemId : itemId, newQuantity : newQuantity})
// }

// console.log(cartitems);




// let data = [];

// let n = input.questionInt("enter the number of details : ");

// for(let i = 0; i < n; i++){
   
//     let name = input.question("enter the name : ");
//     let email = input.question("enter the email : ");
//     let age = input.questionInt("enter the age : ");
//     let city = input.question("enter the city : ");

//     data.push({name : name, email : email, age : age, city : city})
// }

// console.log(data);


// Promise



let promisObj = new Promise(toExecute)

function toExecute(resolve,reject){
    setTimeout(() =>{
        let data = [1,2,3,4,5];
        if(data.ok){
            resolve(data[0]);
        }else{
            reject("error")
        }
    },2000);
    
}

promisObj.then((a)=>{
    console.log(a);
}).catch((error)=>{
    console.error(error,"error")
})