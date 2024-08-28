
const input = require("readline-sync");

// Define the mapping of binary strings to characters
const mapping = {
    "00": "A",
    "01": "T",
    "10": "C",
    "11": "G"
};

let T = input.questionInt("enter the number of test cases: ");


for (let t = 0; t < T; t++) {
    let N = input.questionInt("enter the length of the sequence: ");
    let S = input.question("enter the binary string: ");

    let encodedSequence = "";
    // Iterate through the binary string and replace with corresponding characters
    for (let i = 0; i < N; i += 2) {
        let binarySubstring = S.slice(i, i + 2);
        encodedSequence += mapping[binarySubstring];
    }

    // Print each character of the encoded sequence on a new line
    for (let i = 0; i < encodedSequence.length; i++) {
        console.log(encodedSequence[i]);
    }
}
