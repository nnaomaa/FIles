//volume = side^3
//Write a JavaScript program that asks the user for the side length of a cube.
//Calculate its volume and print the result.

const prompt = require("prompt-sync")();
let side= prompt("Enter side length of cube");
let volume= side * side * side;

console.log("Volume of a cube " + volume);