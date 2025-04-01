console.log(
  "---------------------------------DAY 45--------------------------------"
);
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

console.log(
  "------------------------DAY 46----------------------------------------"
);

//  QS. a "good string " is a string that start with letter A and length is >(greater then) 3. write a program that find the good string and bad string...

let str = "apple";

if (str.length > 3 && str[0] === ("a" || "A")) {
  console.log(`The string ${str} is Good string`);
} else {
  console.log(`The string ${str} is Bad string`);
}

// QS. practice Ques-

let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}

// switch statement Qs.

let day = 5;

switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tues");
    break;
  case 3:
    console.log("Wensd");
    break;
  case 4:
    console.log("Thrs");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log(
      `There are only 7 day in a week & you want day ${day} is not possible! sorry..`
    );
    break;
}

// Alert and Prompt

let fName = prompt("Enter 1st Name: ");
let sName = prompt("Enter 2nd Name: ");
console.log(`${fName} ${sName}`);

let n1 = 32;
let n2 = 47552;
if (n1 % 10 == n2 % 10) {
  console.log("last digit are same");
} else {
  console.log("last digit is not same");
}

console.log(
  "------------------------DAY 47----------------------------------------"
);

let password = prompt("Enter your password");
console.log(`your passwor is :${password.toLowerCase().trim()}`);
console.log("index of _ is : ", password.indexOf("_"));

console.log(
  "------------------------DAY 48----------------------------------------"
);
let msg = "ilovecoding";
console.log(msg.trim().toUpperCase());
console.log(msg.indexOf("co"));

//array

let student = [10, 20, 30, 40, "vedant"];
console.log(student);

console.log(
  "------------------------DAY 49----------------------------------------"
);

// let student = [10, 20, 30, 40, "vedant"];

undefined;
console.log(student);
VM75: 1(5)[(10, 20, 30, 40, "vedant")];
undefined;
let stud = [10, 20, 30, 40, "vedant"];

// undefined
student.concat(stud);
(10)[(10, 20, 30, 40, "vedant", 10, 20, 30, 40, "vedant")];
console.log(student.indexOf("vedant"));

// undefined
console.log(stud.reverse());
VM201: 1(5)[("vedant", 40, 30, 20, 10)];
// undefined

console.log(stud.slice(3));
// undefined
console.log(stud.slice(3, 5));
VM460: 1(2)[(20, 10)];
// undefined
console.log(stud.slice(2, 6));
VM491: 1(3)[(30, 20, 10)];
// undefined
console.log(stud.slice(-2));
VM562: 1(2)[(20, 10)];
// undefined
console.log(stud.slice(-6));
// undefined
