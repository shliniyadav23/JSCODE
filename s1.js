
// comman word index

const input = require("readline-sync");

// let n = input.questionInt("Enter the size of array: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = input.question(`Enter the ${i+1} string: `);
// }

// console.log(arr);
// let x = input.question("Enter the letter: ");

// let arr1 = [];

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j].includes(x)) {
//         arr1.push(j);
//     }
// }

// console.log(arr1);


// maximum number of word found sentences

// let sentences = input.question("Enter the sentences separated by comma: ").split(",");

// console.log(sentences);

// let maxWords = 0;

// for (let i = 0; i < sentences.length; i++) {
//     let words = sentences[i].trim().split(" ");
//     let wordCount = words.length;

//      console.log(`Sentence ${i + 1}: ${wordCount} words`);

//     if (wordCount > maxWords) {
//         maxWords = wordCount;
//     }
// }

// console.log("The maximum number is", maxWords);



// Reverse prifix word



// let word = input.question("Enter the words : ");
// let char = input.question("Enter the char end the word : ");
// let index = word.indexOf(char);
// console.log(word);
// console.log(index);

// if(index!= -1){
//   let reverse =  word.slice(0,index + 1).split("").reverse().join('');
//   let remain = word.slice(index+1)

//   let add = reverse + remain;
//   console.log(add);
// }else{
//     console.log("Character not found in the word");
// }


// chaeck if two strings array are equal


// let word1 = input.question("Enter the string of array : ").split(" ");
// let result = word1.join('')
// console.log(word1);

// console.log(result);
// let word2 = input.question("Enter the string of array : ").split(" ");
//  console.log(word2);

//  let result1 = word2.join('');
//  console.log(result1);

// if(result === result1){
//     console.log("True");
// }else{
//     console.log("False");
// }


// Tracunt sentence

// let s = input.question("Enter the sentence : ").split(",");
// console.log(s);
// let arr=[]
// let k = input.questionInt("Enter the number : ");

// for(let i = 0; i < s.length; i++){
    
// }


// let obj1 = {a:1};
// let obj2 = {b:2};
// let add = {...obj1, ...obj2, a:3};
// console.log(add.a , add.b);


// let x = new Date("2022-02-30").toString()
// console.log(x);


// shuffle String



// let s = input.question("Enter the string: ").split("");
// let indices = input.question("Enter the indices separated by commas: ").split(",").map(Number);

// let arr = [];

// for (let i = 0; i < s.length; i++) {
//   arr[indices[i]] = s[i];
// }

// let shuffledString = arr.join("");

// console.log(shuffledString);



// check if str is acronym 


// let words = input.question("enter the string : ").split(" ");
// console.log(words);

//  let s = input.question("enter the ancronym word : ")

//  let result = "";
// for(let i = 0; i < words.length; i++){
//     result += words[i].charAt(0)

// }
// if(result===s){
//     console.log(true);
// }else{
//     console.log(false);
// }



// reverse prefix of word


// let str = input.question("enter the string : ");
// console.log(str);

// let ch = input.question("enter the character : ")

// for(let i = 0; i < str.length; i++){
//     if(str[i] == ch){
//         let spl = str.substring(0,i+1);
//         let spl1 = str.substring(i+1,str.length)
//         let rev = spl.split("").reverse().join("");
//         var res = rev + spl1;
//         break;
//     }
// }
// console.log(res);



// reverse word in a string


//  let s = input.question("enter the string : ").split(" ");
//  console.log(s);

//  for(let i = 0; i < s.length; i++){

//   s[i] = s[i].split('').reverse('').join('')
//     }

// let rev = s.join(" ");
// console.log(rev);



// reverse words in a string

// let s = input.question("Enter the string : ").split(" ");


// for(let i = 0; i < s.length; i++){
//     let str = s[i].split('').reverse('').join('');
//     console.log (str);
// }


// sorting the swntence



//  let s = input.question("Enter the string : ").split(" ");

//  for(let i = 0; i < s.length; i++){
//     for(let j = 0; j < s[i].length; j++){
        
//     }
//  }

//  console.log(s);

// let a = "is2 sentence4 This1 a3"

// let splitStr = str.split(" ");
// let result = [];  

// for (let i = 0; i < splitStr.length; i++) {
//     let last = splitStr.length-1
//     let l = Number(splitStr[i][last]);
//     result.splice(l-1,0,splitStr[i])
// }
// console.log(result.join(" "));  



// let a = input.question("enter the string : ").split(" ");

// let arr = new Array(a.length);

// for(let i = 0; i < a.length; i++){
//     let n = a[i].slice(a[i].length-1);
//     let char = a[i].substring(0,a[i].length-1);

//     for(let j = 0; j < a.length; j++){
//         if(n == j+1){
//             arr[j] = char;
//         }
//     }
// }


// console.log(arr);

// let str = "";


// for(let i = 0; i < arr.length; i++){
//     str += arr[i] + " ";
// }

// console.log(str);







// find max number of str pairs


// let str = input.question("Enter the string : ").split(" ");

// console.log(str);

// let count = 0;

// let check = [];

// for(let i = 0; i < str.length; i++){
//     let rev = str[i].split('').reverse().join('');
//     console.log(rev);
//     let index = check.indexOf(rev);
//     console.log(index);
//     if(index !== -1){
//         count++;
//         check.splice(index , 1)

//     }else{
//         check.push(str[i])
        
//     }

// }


// console.log(count);



// substring in words

// let str = input.question("ENter the string : ").split(" ");

// console.log(str);

  
// let word = input.question("Enter the target : ").split("");
// console.log(word)

// let count = 0;
// for(let i = 0; i < str.length; i++)
    
//   for(let j = 0; j < word.length; j++){
//     if(word[j] === str[i]){
//         count++
//     }else{

//     }
//   }
//     console.log(count);



// merge str alternately



// let word1 = input.question("Enter the word1 : ")

// let word2 = input.question("Enter the word2 : ")

// let mergedString = '';


// const maxLength = Math.max(word1.length, word2.length);

// for (let i = 0; i < maxLength; i++) {
//   if (i < word1.length) {
//     mergedString += word1[i];
//   }
//   if (i < word2.length) {
//     mergedString += word2[i];
//   }

// }

// console.log(mergedString);




// sort the people


// let names = input.question("Enter the names : ").split(" ");

// console.log(names); 

// arr = [];

// let n = input.questionInt("Enter the number of heights : ");

// for(let i = 0; i < n; i++){
//   arr[i] = input.questionInt(`enter the ${i+1} heights : `)
// }

// console.log(arr);

// let sort = arr.sort((b,a)=>arr);
// console.log(sort);





// . String Compression

let str = input.question("Enter the string: ");

let compressed = ""; 
let count = 1; 
for (let i = 0; i < str.length; i++) {
    // If the next character is the same, increment the count
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        compressed += str[i] + count;
        count = 1; 
    }
}


if (compressed.length < str.length) {
    console.log(compressed);
} else {
    console.log(str);
}

