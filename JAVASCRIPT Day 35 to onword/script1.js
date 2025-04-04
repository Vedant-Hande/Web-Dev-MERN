let student = [10, 20, 30, 40, 50];
// let newArr = [];
// let last = ;
student[3] = "prathamesh";
console.log(student.length);
console.log(student[student.length - 1]); // accessign last element of array using length ()

student.push(60);
student.push(70);
student.push(80);
console.log(student);
student.pop();
console.log(student);

let follow = ["a", "b", "c", "d"];
let blocked = follow.shift();
console.log("-------------- Your followers is----------");
for (let i = 0; i < follow.length; i++) {
  console.log(follow[i]);
}
console.log(`You blocked this user :${blocked}`);

// Q change this array in last .

let start = ["jan", "july", "march", "August"];
let final = [];
for (let i = 0; i < start.length == 1; i++) {
  start.shift();
}

start.unshift("july");
start.unshift("june");
console.log(start);

console.log(
  "------------------------DAY 50----------------------------------------"
);

const arr = [
  [2, 4],
  [3, 6],
  [4, 8],
];
undefined;
console.log(arr);
// VM144:1 (3) [Array(2), Array(2), Array(2)]0: (2) [2, 4]1: (2) [3, 6]2: (2) [4, 8]length: 3[[Prototype]]: Array(0)
undefined;
arr[0];
// (2) [2, 4]
arr.length;
3;
// practice Question
undefined;
let pr1 = [7, 9, 0, -2];
undefined;
let n = 3;
// undefined
console.log(pr1.slice(0, n));
// VM475:1 (3) [7, 9, 0]
// undefined
console.log(pr1.slice(3));
// VM496:1 [-2]
// undefined
console.log(pr1.slice(pr1.length - n));
// VM534:1 (3) [9, 0, -2]
// undefined
const pr_Str = "vedant";
// undefined
if (pr_Str == null) {
  console.log("string is empty");
} else {
}
// undefined
if (pr_Str == null) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}
// VM762:4 string is not empty
// undefined
if (pr_Str == "") {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}
// VM770:4 string is not empty
// undefined
if (pr_Str.length == 0) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}
// VM791:4 string is not empty
// undefined
const pr_Char = "V";

// removing the white space within the string
pr_Str;
("vedant");
console.log(`removing the white space within the string ${pr_Str.trim()}`);
// VM1377:1 removing the white space within the string vedant
pr_Str1 = "    vedant      Hande      ";
("    vedant      Hande      ");
console.log(`removing the white space within the string ${pr_Str1.trim()}`);
// VM1490:1 removing the white space within the string vedant      Hande
console.log(`removing the white space within the string :  ${pr_Str1.trim()}`);
// VM1496:1 removing the white space within the string :  vedant      Hande
pr_Str1 = "    Vedant Hande    ";
("    Vedant Hande    ");
console.log(`removing the white space within the string :  ${pr_Str1.trim()}`);
// VM1571:1 removing the white space within the string :  Vedant Hande

arr(3)[(Array(2), Array(2), Array(2))];
if (arr.indexOf(6) !== null) {
  console.log("element found");
}
// VM1753:3 element found
undefined;
if (arr.indexOf(6) !== null) {
  console.log("element found");
}
// VM1757:3 element found
undefined;
if (arr.indexOf(6) !== 0) {
  console.log("element found");
}
// VM1764:3 element found
undefined;
if (arr.indexOf(6) == 0) {
  console.log("element found");
}
undefined;
if (arr.indexOf(6) !== "") {
  console.log("element found");
}
// VM1775:3 element found
undefined;

console.log(
  "------------------------DAY 51----------------------------------------"
);

// printing odd Number from 1 to 50
for (let i = 0; i < 50; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// VM50:4 1
// VM50:4 3
// VM50:4 5
// VM50:4 7
// VM50:4 9
// VM50:4 11
// VM50:4 13
// VM50:4 15
// VM50:4 17
// VM50:4 19
// VM50:4 21
// VM50:4 23
// VM50:4 25
// VM50:4 27
// VM50:4 29
// VM50:4 31
// VM50:4 33
// VM50:4 35
// VM50:4 37
// VM50:4 39
// VM50:4 41
// VM50:4 43
// VM50:4 45
// VM50:4 47
// VM50:4 49
// undefined

// printing even Number from 1 to 50
for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// VM62:4 0
// VM62:4 2
// VM62:4 4
// VM62:4 6
// VM62:4 8
// VM62:4 10
// VM62:4 12
// VM62:4 14
// VM62:4 16
// VM62:4 18
// VM62:4 20
// VM62:4 22
// VM62:4 24
// VM62:4 26
// VM62:4 28
// VM62:4 30
// VM62:4 32
// VM62:4 34
// VM62:4 36
// VM62:4 38
// VM62:4 40
// VM62:4 42
// VM62:4 44
// VM62:4 46
// VM62:4 48
// undefined

// printing multipication table of 7
// for (let i = 7; i <= 70; i += 7) {
//   console.log(i);
// }

const user_Num = prompt("enter the number ");
let num = parseInt(user_Num);
for (let i = num; i <= num * 10; i = i + num) {
  console.log(i);
}
// VM256:3 7
// VM256:3 14
// VM256:3 21
// VM256:3 28
// VM256:3 35
// VM256:3 42
// VM256:3 49
// VM256:3 56
// VM256:3 63
// VM256:3 70
// undefined


// fav_Movie guessing game 
console.log("Game started press quit to exit the game !");

const fav_Movie = "war";
let guess = prompt("Guess my fav movie ...");
while (guess !== fav_Movie && guess !== "quit") {
  guess = prompt(" Wrong guess! Plz try Again");
}
if (guess == fav_Movie) {
  console.log("guess is correct ! you win");
} else {
  console.log("you Quit");
}
