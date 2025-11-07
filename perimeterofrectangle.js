//Perimeter of a Rectangle perimeter = 2 × (length+ width)
//Write a JavaScript program that asks for the length and width of a rectangle.
//Calculate and print its perimeter using the formula below.
//Area / Length = Width
//

const prompt = require('prompt-sync')();

let length = prompt("Enter the length of a rectangle");
let width = prompt("Enter the width of a rectangle");

// Convert length and width to numbers using the unary plus operator
let perimeter = 2 * (+length + +width);

console.log("Perimeter of a rectangle " + perimeter);
