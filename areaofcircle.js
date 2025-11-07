// Write a JavaScript program that asks the user for the radius of a circle and calculates its area
// Use the formula: area = pi × r^2  pi = 3.14
// Finally, print the result rounded to two decimal places.

const prompt = require('prompt-sync')();
let radius= prompt("Enter the radius of a circle");
const pi=3.14;
let area= pi * radius *radius;


console.log(area);
console.log(radius);
console.log("area of a circle "+ area);