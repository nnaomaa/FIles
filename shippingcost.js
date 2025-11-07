//Create a program that calculates the total shipping cost based on the shipping zone and package weight in pounds (lb).

//1. Ask the user to enter the shipping zone (local, regional, national, or international).
// 2. Ask the user to enter the package weight in pounds (lb).
// 3. Use a switch statement to determine the rate per pound:
// ○ local → $2.50 per lb
// ○ regional → $3.50 per lb
// ○ national → $5.00 per lb
// ○ international → $10.00 per lb
// 4. Calculate the total shipping cost using the formula:
// totalCost = weight * rate
// 5. Display the shipping zone, package weight, rate per pound, and total cost.

const prompt= require('prompt-sync')();
let shipZone= prompt("Enter your shipping zone (Local, regional, national, or international): ");
let weight= parseFloat(prompt("Enter package weight in pounds (lb(s): "));
let rate= 0;

switch(shipZone){
    case "Local":
        rate= 2.5;
        break;

    case "Regional":
        rate= 3.5;
        break;

    case "National":
        rate= 5.;
        break;

    case "International":
        rate= 10;

    default: 
    console.log("Invalid");
}

let totalCost = weight *rate;


console.log("Shipping Zone: " + shipZone);
  console.log("Weight: " + weight + " lb");
  console.log("Rate per pound: $ " + rate);
  console.log("Total Cost: $ " + totalCost);