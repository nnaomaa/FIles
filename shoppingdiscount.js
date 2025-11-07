
//calculate discount of original price
//final = price − (price × discount / 100)
//Write a JavaScript program that helps a user calculate the final price after applying a discount.
//Ask the user for the original price of an item.
//Ask for the discount percentage.
//Calculate the final price after the discount.
//Display the result with a clear message.


const prompt = require("prompt-sync")();
let originalPrice, discount, finalPrice;

originalPrice= parseInt(prompt("enter the original value of shirt"));
discount= parseInt(prompt("Enter discount offered"));

discount = discount/100;
finalPrice= (originalPrice - (originalPrice * discount));

console.log("The final price is " + finalPrice);
