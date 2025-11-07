// Based on light color, give appropriate instruction:
// ● "red": "Stop"
// ● "yellow": "Slow down"
// ● "green": "Go"
// ● Any other: "Invalid light color"

const prompt = require('prompt-sync')();
let color= prompt("Enter light color: ");


if (color==="red")
{
    console.log("Stop")
}