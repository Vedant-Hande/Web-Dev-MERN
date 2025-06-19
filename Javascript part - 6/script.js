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
let num = 5;
let sayHello = function () {
  console.log("Hello, World!");
};
highOrderFunc(sayHello(), num);

highOrderFunc(function () {
  console.log("Hello, Vedant!");
}, num);

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

// method in js
const calculator_Object = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  // we can also use methods like this
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
};

console.log(calculator_Object);
console.log(calculator_Object.add(10, 20)); // 30
console.log(calculator_Object.sub(20, 10)); // 10
console.log(calculator_Object.mul(10, 20)); // 200
console.log(calculator_Object.div(20, 10)); // 2

const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
    console.log(this); // 'this' refers to the object itself
  },
};
setTimeout(object.logMessage, 1000);

//  19-06-25 Q4. Callbacks with this keyword
// In this example, the callback function is called with the global context, not the object context
let length = 4;
function callback() {
  console.log(this.length);
  console.log(this); // 'this' refers to the global object (window in browsers, global in Node.js)
  // In non-strict mode, this will refer to the global object, which may notx
}
callback();
// logs 4 or undefined depending on the environment
// const obj = {
//   length: 5,
//   method(a) {
//     callback();
//   },
// };
// obj.method(callback());

/**  method, callback() is called as a regular function, not as a method of any object.
In non-strict mode, when a function is called like callback(), this refers to the global object (window in browsers, global in Node.js).
The global object has a property length only in some contexts (like in browsers, window.length is the number of frames, often 0).
However, in this code, the global variable length = 4 does NOT make window.length = 4. So, in most environments, this.length will be undefined or 0.**/
