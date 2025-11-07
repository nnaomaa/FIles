//Area of a Square 
// area = side × side
//Write a JavaScript program that asks the user for the side length of a square.
//Calculate and print its area.

const prompt = require("prompt-sync")();
let side= prompt("Enter side length of square");
let area= side * side;

console.log("Area of a square "+ area);

