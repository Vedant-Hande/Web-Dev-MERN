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

function highOrderFunc(res, count) {
  for (let i = 0; i < count; i++) {
    res();
  }
}

let num = 5;
let sayHello = function () {
  console.log("Hello, World!");
};

highOrderFunc(sayHello, num);

function res() {
  console.log("Hello, Vedant!");
}

highOrderFunc(res, num);

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
invalidFunc(); // Please provide a valid request

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

//  19-06-25 Q4. Callbacks with this keyword

const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
    // console.log(this); // 'this' refers to the object itself
  },
};
setTimeout(object.logMessage(), 1000);

function callback() {
  console.log(this.length);
  //  'this' refers to the global object (window in browsers, global in Node.js)
  // In non-strict mode, this will refer to the global object, which may notx
}
callback();
// obj.method(callback());

/**  method, callback() is called as a regular function, not as a method of any object.
 In non-strict mode, when a function is called like callback(), this refers to the global object (window in browsers, global in Node.js).
 The global object has a property length only in some contexts (like in browsers, window.length is the number of frames, often 0).
However, in this code, the global variable length = 4 does NOT make window.length = 4. So, in most environments, this.length will be undefined or 0.**/

// Array methods - >

// 1. forEach
const number = [1, 2, 4, 9, 5, 6, 7, 3];

number.forEach((el) => {
  console.log("element is  :>> ", el);
});

// 2. map   -> return the new array
let arrSec = number.map((el) => {
  return el * 2;
});

console.log(arrSec);

// 3. filter -> return the new array with condition
let arrThi = number.filter((el) => {
  if (el % 2 === 0) {
    return el;
  }
});
console.log("Even number is :>> ", arrThi);

// 4.reduce // The reduce method iterates through the array and adds each element to the accumulator
// and returns the final accumulated value.
const number_arr = [6, 4, 8];
let ans_Reduce = number_arr.reduce((accu, el) => {
  return accu * el;
}); // answer ->384

console.log("The product of all elements is :>> ", ans_Reduce);

// 5. find -> return the first element that matches the condition
const ans_Find = number_arr.find((el) => {
  return el > 2;
}); // answer ->6

console.log("The first element greater than 2 is :>> ", ans_Find);

// 6. findIndex -> return the index of the first element that matches the condition
const ans_Find_Index = number_arr.findIndex((el) => {
  return el > 2;
}); // answer -> 2
console.log(
  "The index of the first element greater than 2 is :>> ",
  ans_Find_Index
);

// 7. Every -> checks if all elements in the array match the condition and if it match then it returns true otherwise false
let ans_every = number_arr.every((el) => {
  return el % 2 == 0;
});
console.log("ans_every :>> ", ans_every);

// 8. some -> checks if at least one element in the array matches the condition and if it match then it returns true otherwise false
let ans_some = number.some((el) => {
  return el % 15 == 0;
});
console.log("ans_some :>> ", ans_some);

//spread (...)

Math.max(...number);
// answer -> 9
console.log("The maximum number is :>> ", Math.max(...number));
// string spread-> v e d a n t
console.log(..."VedantHande");

let data = {
  name: "Vedant Hande",
  age: 19,
  city: "Nashik",
  hobbies: ["coding", "reading", "gaming"],
};
let data1 = { ...data, roll: 12345, college: "MIT" };
console.log("data :>> ", data);
console.log("data1 :>> ", data1);

// Object.keys() -> returns an array of the object's keys
// Object.values() -> returns an array of the object's values
console.log("Keys of data :>> ", Object.keys(data));
console.log("Keys of data :>> ", Object.keys(data1));
console.log("Values of data :>> ", Object.values(data));
console.log("Values of data :>> ", Object.values(data1));

let sampleData = {
  ...number,
  ..."hello world",
  description:
    "this is a sample data object that convert the array & string into the object",
};

console.log(sampleData);
// console.log(...sampleData); we can't spread the object into the console
console.log(...number);

// 2025- 06-23 Assignment

// Q1
const square = number.map((el) => {
  return el * el;
});
console.log("The square of the number is :>> ", square);

const sum1 = square.reduce((accu, el) => {
  return accu + el;
});

console.log("The sum  of the number is :>> ", sum1);

const avg = sum1 / number.length;
console.log("The average of the number is :>> ", avg);

// reduce is used to sum up all the elements in the array
// accu is the accumulator that stores the sum of all elements
// el is the current element in the array

// Q2
const q2Ans = number.map((ele) => {
  return ele + 5;
});
console.log("The normal array is :>> ", number);
console.log("The number after adding 5 is :>> ", q2Ans);
