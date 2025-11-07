//Create a program that calculates an employee’s bonus and total salary based on their level in the company.
// 1. Ask the user to enter their employee level (junior, mid, senior, or lead).
// 2. Ask the user to enter their base salary (for example, $50,000).
// 3. Use a switch statement to determine the bonus percentage based on the level:
// ○ junior → 5% bonus
// ○ mid → 10% bonus
// ○ senior → 15% bonus
// ○ lead → 20% bonus

const prompt = require('prompt-sync')();
let level= prompt("Enter employee level: ");
let base= parseFloat(prompt("Enter base salary: $ "));
let bonusP= 0;

switch(level){
    case "Junior":
        bonusP= 0.05;
        break;

    case "Mid":
        bonusP= 0.1;
        break;

    case "Senior":
        bonusP= 0.15;
        break;

    case "Lead":
        bonusP= 0.2;
        break;

    default:
    console.log("Invalid");

}

let totalBonus= base * bonusP;
let totalSalary= base + totalBonus;

console.log("Bonus: $ " + totalBonus);
console.log("Final salary: $ " + totalSalary);



