
const input=require("readline-sync");

let LIabraly =[];
function Add_book(Title,Author,Price){
     LIabraly.push({title : Title , author : Author,price : Price } );
     console.log("libraly book entery registration");
     console.log(LIabraly);
}

function search_book(Title){
    let search = LIabraly.some( item => item.title === Title);
    if(search){
        console.log("available");
    }else{
        console.log("Not available");
    }
}

function remove_book(Title){
    let index = LIabraly.findIndex( item => item.title === Title);
    if (index !== -1){
        LIabraly.splice(index,1);
        console.log("book has been deleted from libraly");
    }else{
        console.log("no such libraly book entery");
    }
    console.log(LIabraly);
}

function main(){
    console.log("enter '0' add a book to the library");
    console.log("enter '1' search for a book in the library ");
    console.log("enter '2' remove a book from the library ");
    console.log("enter '3' to exit the program ");

    for(;;){
        let o = input.questionInt("enter the operation : ");
         if(o==0){
            let Title = input.question("enter the title of book : ");
            let Author = input.question("enter the author of book : ");
            let Price = input.question("enter the price  of book : ");
            Add_book(Title , Author , Price);
         }else if(o==1){
            let Title = input.question("enter the name of the title  ");
            search_book(Title);

         }else if(o ==2){
            let Author = input.question("enter the name of the author ");
            remove_book(Author);
         }else if(o ==3){
            console.log("exiting the programm....");
            break;
        }else {
            console.log("enter a valid operation.");
         }
    }
}
main();