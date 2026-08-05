//Conditional Statements
//Conditional statements are used to perform different actions based on different conditions. 
// In TypeScript, we can use if, else if, and else statements to create conditional logic.

let num = 10;
if (num > 0) {
    console.log("The number is positive.");
}else{
    console.log("The number is not positive.");
}

let lettersAndCertificates = "accountReference";

if (lettersAndCertificates === "accountReference") {
    console.log("The lettersAndCertificates is accountReference and charges are 0 AED.");
}
else if (lettersAndCertificates === "liabilityLetter") {
    console.log("The lettersAndCertificates is liabilityLetter and charges are 52.5 AED.");
}
else if (lettersAndCertificates === "clearanceLetter") {
    console.log("The lettersAndCertificates is clearanceLetter and charges are 0 AED.");
}
else{
    throw new Error("Invalid lettersAndCertificates value");
}
//Switch Statement
//----------------
//The switch statement is used to perform different actions based on different conditions. 
// It is an alternative to using multiple if-else statements. The switch statement evaluates an expression and matches its value against 
// different case clauses. If a match is found, the corresponding block of code is executed.

let browser = "Chrome";
switch (browser) {
    case "Chrome":
        console.log("The browser is Chrome.");
        break;
    case "Firefox":
        console.log("The browser is Firefox.");
        break;
    case "Safari":
        console.log("The browser is Safari.");
        break;  
    default:
        console.log("The browser is not recognized.");
}
export {};