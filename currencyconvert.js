//Create a program that converts USD to another currency using sample conversion rates.

// 1. Ask for the amount in USD (e.g., 100).
// 2. Ask for the target currency (EUR, GBP, JPY, AUD).
// 3. Use a switch statement for conversion rates:
// ○ EUR → 0.93 → € EUR (Euro)
// ○ GBP → 0.80 → £ GBP (British Pound)
// ○ JPY → 150.20 → ¥ JPY (Japanese Yen)
// ○ AUD → 1.52 → A$ AUD (Australian Dollar)
// 4. Calculate:
// convertedAmount = USD * rate
// 5. Display the original and converted amounts with currency symbols.

const prompt= require('prompt-sync')();
let USD= parseFloat(prompt("Enter amount in USD: $ "));
let currency= prompt("Enter your target currency (EUR, GBP, JPY, AUD): ");
let rate= 0;
let currencysim= "";

 switch(currency){
    case "EUR":
        rate= 0.93;
        currencysim= "€ EUR";
        break;

    case "GBP":
        rate= 0.80;
        currencysim= "£ GBP";
        break;

    case "JPY":
        rate= 150.20;
        currencysim= "¥ JPY";
        break;

    case "AUD":
        rate= 1.52;
        currencysim= "A$ AUD";
        break;

    default:
    console.log("Invalid.");
}

let convertAmount = USD * rate;
console.log("Original: $" + USD + " USD");
console.log("Convert Amount: " + convertAmount + " " + currencysim);
