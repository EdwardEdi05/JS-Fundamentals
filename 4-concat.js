// Write a script that prints two arguments passed to it, in the following format: “ is ”

//     You must use console.log(...) to print all output
//     You are not allowed to use var
// EXAMPLE TEST CASES
// guillaume@ubuntu:~/0x12$ node 4-concat.js c cool
// c is cool
// guillaume@ubuntu:~/0x12$ node 4-concat.js c
// c is undefined
// guillaume@ubuntu:~/0x12$ node 4-concat.js
// undefined is undefined

const args = process.argv.slice(2);
const first = args[0];
const second = args[1];

console.log(`${first} is ${second}`);