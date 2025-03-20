console.log("DAY 45");
// ------------------------ Templet Retrals ----------------------------------

let pen1_Price = 10;
let pen2_Price = 20;
// let output = "The total price is : " + (pen1_Price + pen2_Price) + " Rupess.";
let output = `The total price is : ${pen1_Price + pen2_Price} Rupess.`;
// back tik
console.log(output);

// --------------------- Arithmetic Operator ------------------------------

let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//----------------------- Uinary Operator ------------------------------------

console.log(a++); //10
console.log(a++); //11
console.log(++a); //13

// --------------------- Conditional Statement ------------------------------

//  1. --------> Traffic Light System

let color = "yellow";

if (color == "red") {
  console.log("STOP... it's RED");
}
if (color == "yellow") {
  console.log("SLOW DOWN... it's YELLOW");
}
if (color == "green") {
  console.log("YOU CAN GO NOW... it's GREEN");
}

// 2. ------------>  Popcorn price checker Based on size

let popCornSize = "xl";

if (popCornSize === "xl") {
  console.log("popcorn pirce is : 250");
} else if (popCornSize === "l") {
  console.log("popcorn pirce is : 200");
} else if (popCornSize === "m") {
  console.log("popcorn pirce is : 150");
} else if (popCornSize === "s") {
  console.log("popcorn pirce is : 100");
} else {
  console.log("sorry u are choosing wrong size popcorn");
}
  