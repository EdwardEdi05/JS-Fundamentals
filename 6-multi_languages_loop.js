// Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

//     The first line: “C is fun”
//     The second line: “Python is cool”
//     The third line: “JavaScript is amazing”
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You are not allowed to use any if/else statement
//     You can use only one console.log
//     You must use a loop (while, for, etc.)
// EXAMPLE TEST RUN
// guillaume@ubuntu:~/0x12$ node 6-multi_languages_loop.js 
// C is fun
// Python is cool
// JavaScript is amazing
// guillaume@ubuntu:~/0x12$ 

let C = 'C is fun';
let Py = 'Python is cool';
let Js = 'JavaScript is amazing';

const names = [C, Py, Js];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}