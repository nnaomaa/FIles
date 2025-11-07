//Create a program that calculates the total cost of a gym plan based on duration and monthly rate.
// 1. Ask for the plan type (monthly, quarterly, semi-annual, annual).
// 2. Ask for the monthly rate (for example, $40).
// 3. Use a switch statement:
// ○ monthly → 1 month, 0 % discount


// ○ quarterly → 3 months, 5 % discount
// ○ semi-annual → 6 months, 10 % discount
// annual → 12 months, 20 % discount
// 4. Compute:

//originalCost = months * monthlyRate
// discountAmount = originalCost * (discount / 100)
// finalCost = originalCost - discountAmount

// 5. Display duration, original cost, discount, and final total.
const prompt = require('prompt-sync')();

let plan= prompt("Enter your plan type: ");
let monthRate = parseFloat(prompt("Enter your monthly rate: "));
let months = 0;
let discount = 0;
let originalCost = 0;
let discountAmount = 0;
let finalCost = 0;

switch (plan){
  case "months":
    months = 1;
    discount = 0;
    break;

  case "quarterly":
    months = 3;
    discount = 5;
    break;

  case "semi-annual":
    months = 6;
    discount = 10;
    break;

  case "annual":
    months = 12;
    discount = 20;
    break;

  default:
    console.log("Invalid.");
}

originalCost =months *monthRate;
discountAmount= originalCost *(discount / 100);
finalCost= originalCost- discountAmount;

switch (months > 0) {
  case true:
    console.log("Plan Duration: " + months + " months");
    console.log("Original Cost: $" + originalCost);
    console.log("Discount: " + discount + "%");
    console.log("Final Total: $" + finalCost);
    break;
}