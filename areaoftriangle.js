//Area of a Triangle = area = 0.5 × base × height
//Write a JavaScript program that asks the user for the base and height of a triangle.

const prompt = require('prompt-sync')();
let base= prompt("Enter base of a triangle");
let height= prompt("Enter height of a triangle");
let area= 0.5 * base * height;

console.log(0.5 * base * height);