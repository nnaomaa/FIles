//Create a program that computes the total parking fee based on vehicle type and hours parked.
// 1. Ask for the vehicle type (motorcycle, car, suv, truck).
// 2. Ask for hours parked.
// 3. Use a switch statement for hourly rates:

//○ motorcycle → $2 / hour
// ○ car → $3 / hour
// ○ suv → $4 / hour
// ○ truck → $5 / hour
// 4. If the car is parked for more than 5 hours, add a $10 flat fee.
// 5. Display vehicle type, hours, and total fee.

const prompt= require('prompt-sync')();
let vehicle= prompt("Enter vehicle type: ");
let hour= parseFloat(prompt("Enter hours parked: "));
let rate= 0;

switch (vehicle){
  case "Motorcycle":
    rate = 2;
    fee = rate * hour;
    break;

  case "Car":
    rate = 3;
    fee = rate * hour;
    break;

  case "suv":
    rate = 4;
    fee = rate * hour;
    break;

  case "truck":
    rate = 5;
    fee = rate * hour;
    break;

  default:
    console.log("Invalid.");
}

fee = rate * hour;
if (vehicle==="Car" && hour >5){
    fee = fee +10;
}
    console.log("Vehicle Type: " + vehicle);
    console.log("Hours Parked: " + hour);
    console.log("Total Fee: $" + fee);
    
