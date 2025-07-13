// Write a script that prints a square

//     The first argument is the size of the square
//     If the first argument can’t be converted to an integer, print “Missing size”
//     You must use the character X to print the square
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You must use a loop (while, for, etc.)

// guillaume@ubuntu:~/0x12$ node 8-square.js
// Missing size
// guillaume@ubuntu:~/0x12$ node 8-square.js School
// Missing size
// guillaume@ubuntu:~/0x12$ node 8-square.js 2
// XX
// XX
// guillaume@ubuntu:~/0x12$ node 8-square.js 6
// XXXXXX
// XXXXXX
// XXXXXX
// XXXXXX
// XXXXXX
// XXXXXX
// guillaume@ubuntu:~/0x12$ node 8-square.js -3
// guillaume@ubuntu:~/0x12$ 


const X = 'X';
const arg = process.argv.slice(2);
const first = arg[0];
const number = parseInt(first);

if (!isNaN(number) && number > 0) {
    for (let i = 0; i < number; i++) {
        console.log(X.repeat(number));
    } 
} else {
    console.log("Missing size");
    }