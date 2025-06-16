// Normal function

function roolDise() {
  const dice = Math.ceil(Math.random() * 6);
  console.log(dice);
}

roolDise();
roolDise();
roolDise();
roolDise();

// function with agrs

function printInfo(name, age, city) {
  console.log(
    `My name is ${name}, I am ${age} years old and I live in ${city}`
  );
}

printInfo("vedant", 19, "Nashik");
printInfo("", 19);

function calc_Avg(n1, n2, n3) {
  if (n1 && n2 && n3 == undefined) {
    console.log("Please provide all three numbers");
  } else
    console.log(
      `The Avarage of ${n1} , ${n2}, ${n3} is = ${(n1 + n2 + n3) / 3}`
    );
}
calc_Avg(10, 30, 40);

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log("The sum is = " + sumOfNumbers(100));
console.log("The sum is = " + sumOfNumbers(1000));
console.log("The sum is = " + sumOfNumbers(10000));

let strArr = ["vedant", "sarthak", "Machhindra", "ujwala"];

function concatArr(str) {
  let res = "";
  for (let i = 0; i < str.lenth; i++) {
    res += str[i];
    return res;
  }
}

console.log(concatArr(strArr));

let greet = "hello";

function changeGreet() {
  let greet = "hi";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}

console.log(greet);
changeGreet();

// variable funcntion  || function expression
const sum = function (a, b) {
  return a + b;
};

console.log(sum(5, 10));

// high order function
// 1. A high-order function is a function that takes another function as an argument
// 2.  returns a function as its result.

function highOrderFunc(callback, count) {
  for (let i = 0; i < count; i++) {
    callback();
  }
}

let sayHello = function () {
  console.log("Hello, World!");
};

highOrderFunc(function () {
  console.log("Hello, Vedant!");
}, 3);

// highOrderFunc(sayHello, 5);

function oddOrEvenTest(request) {
  if (request == "odd") {
    return function (number) {
      if (number % 2 != 0) {
        console.log("This is an odd number");
      }
    };
  } else if (request == "even") {
    return function (number) {
      if (number % 2 === 0) {
        console.log("This is an even number");
      }
    };
  } else {
    return function () {
      console.log("Please provide a valid request");
    };
  }
}

// let request = "odd";
let oddFunc = oddOrEvenTest("odd");
oddFunc(5); // This is an odd number

let evenFunc = oddOrEvenTest("even");
evenFunc(10); // This is an even number

let invalidFunc = oddOrEvenTest();
invalidFunc(5); // Please provide a valid request
