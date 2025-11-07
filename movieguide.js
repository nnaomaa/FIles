
//Accept movie name and movie rating (G, PG, PG-13, R, NC-17) and display the appropriate audience guideline.
// Guideline: Parents strongly cautioned. Some material may be inappropriate for children under 13.

const prompt = require('prompt-sync')();
let movieN = prompt("Enter name of movie: ");
let rating= prompt("Enter movie rating: (G, PG, PG-13, R, NC-17): ");

console.log("Movie name: " + movieN);

switch (rating){
    case "G":
        console.log("Guideline: Made for all ages.");
        break;

    case "PG":
        console.log("Guideline: Parental Guidance Suggested. Some material may not be suitable for children. ");
        break;

    case "PG-13":
        console.log("Guideline: Parents strongly cautioned. Some material may be inappropriate for children under 13");
        break;

    case "R":
        console.log("Guideline: Under 17 requires accompanying parent or adult guardian.");
        break;
        
    case "NC-17":
        console.log("Guideline: No one 17 and under admitted.");
        break;

    default:
        console.log("Invalid rating")
}























/* const prompt = require('prompt-sync')();

let movieName = prompt("Enter the movie name: ");
let rating = prompt("Enter the movie rating (G, PG, PG-13, R, NC-17): ")

console.log("Movie: " + movieName);

switch (rating) {
  case "G":
    console.log("Guideline: Suitable for all ages.");
    break;

  case "PG":
    console.log("Guideline: Parental guidance suggested. Some material may not be suitable for children.");
    break;

  case "PG-13":
    console.log("Guideline: Parents strongly cautioned. Some material may be inappropriate for children under 13.");
    break;

  case "R":
    console.log("Guideline: Restricted. Under 17 requires accompanying parent or adult guardian.");
    break;

  case "NC-17":
    console.log("Guideline: No one 17 and under admitted.");
    break;

  default:
    console.log("Invalid rating entered.");
} */