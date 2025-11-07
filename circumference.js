//Circumference of a Circle
//circumference = 2 × π × r
//Write a JavaScript program that asks the user for the radius of a circle and prints its circumference.

const prompt = require('prompt-sync')();
let radius= prompt("Enter the radius of circle");
const pi= 3.14;
let circumference= 2 * pi * radius;


console.log("circumference of a circle " + circumference);

