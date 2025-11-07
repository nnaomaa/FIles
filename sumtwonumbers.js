// write a js to add two numbers. accept the numbers from users and display the sum of two numbres 

//two variables to accept numbers from the user
const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Enter any number between 1-100  "));
let num2 = parseInt(prompt("Enter any number between 1-100  "));
let sum= num1 + num2;
/* let sum = parseInt(num1) + parseInt(num2); */

console.log(num1);
console.log(num2);
console.log("sum of two numbers " + sum);

// to conert string to number == parseInt()