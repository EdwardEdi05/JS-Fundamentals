// Write a script that computes and prints a factorial

//     The first argument is integer (argument can be cast as integer) used for computing the factorial
//     Factorial of NaN is 1
//     You must do it recursively
//     You must use a function
//     You must use console.log(...) to print all output
//     You are not allowed to use var

// guillaume@ubuntu:~/0x12$ node 10-factorial.js 
// 1
// guillaume@ubuntu:~/0x12$ node 10-factorial.js 3
// 6
// guillaume@ubuntu:~/0x12$ node 10-factorial.js 89
// 1.6507955160908452e+136
// guillaume@ubuntu:~/0x12$ node 10-factorial.js 333
// Infinity
// guillaume@ubuntu:~/0x12$ 

const args = process.argv.slice(2);
const number = parseInt(args[0]);

function factorial(n) {
    if (isNaN(n) || n===0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(number));