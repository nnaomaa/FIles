// Write an IF-ELSE-IF statement to classify temperature:
// Above 30°C: "Hot"
// 20°C to 30°C: "Warm"
// 10°C to 19°C: "Cool"
// Below 10°C: "Cold"

const prompt = require('prompt-sync')();


let temperature=parseInt(prompt("Enter any temperature"));

if (temperature >30)
{
  console.log("Hot");
} 

else if (temperature >= 20) 
{ 
  console.log("Warm");

} 

else if (temperature >= 10) 
{
  console.log("Cool");
} 

else 
{
  console.log("Cold");
}