//Create a program that converts a temperature between Celsius and Fahrenheit.
//2. Ask for the conversion type:
//○ C2F for Celsius → Fahrenheit
//○ F2C for Fahrenheit → Celsius
//3. Use a switch statement and formulas:
//○ C2F: result = (C × 9 / 5) + 32
//○ F2C: result = (F − 32) × 5 / 9
//4. Display both input and converted values.
const prompt = require('prompt-sync')();

let type= prompt("Enter conversion type (C2F or F2C): ");
let temp= parseFloat(prompt("Enter the temperature: "));
let result= 0;

switch (type){
  case "C2F":
    result = (temp * 9 / 5) + 32;
    console.log("Temperature: " + temp + "°C");
    console.log("Converted Temperature: " + result + "°F");
    break;

  case "F2C":
    result = (temp - 32) * 5 / 9;
    console.log("Temperature: " + temp + "°F");
    console.log("Converted Temperature: " + result + "°C");
    break;

  default:
    console.log("Invalid.");
}