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

// printing even Number from 1 to 50
for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
/**
  printing multipication table of 7
 for (let i = 7; i <= 70; i += 7) {
   console.log(i);
 }
**/

const user_Num = prompt("enter the number ");
let num = parseInt(user_Num);
for (let i = num; i <= num * 10; i = i + num) {
  console.log(i);
}

// fav_Movie guessing game
console.log("Game started press quit to exit the game !");

const fav_Movie = "war";
let guess = prompt("Guess my fav movie ...");
while (guess != fav_Movie && guess != "quit") {
  guess = prompt(" Wrong guess! Plz try Again");
}
if (guess == fav_Movie) {
  console.log("guess is correct ! you win");
} else {
  console.log("you Quit");
}
// console.log("object :>> ", fav_Movie);

console.log(
  "------------------------DAY 52----------------------------------------"
);
// object literals
const student = {
  name: "vedant",
  age: 18,
  marks: 99.4,
};

const twitter_Post = {
  userName: "@vedanthande",
  content: "hello this is my 1st post",
  likes: 47,
  repost: 14,
  tages: ["@veanthande", "@vaishanavibhangre", "@delta"],
};

twitter_Post["content"];
// 'hello this is my 1st post'

twitter_Post.likes;
twitter_Post.tages;
// (3) ['@veanthande', '@vaishanavibhangre', '@delta']
twitter_Post.tages[2];
("@delta");
let prop = "userName";
undefined;
twitter_Post[prop];
("@vedanthande");
// let prop = "userName1";
undefined;
twitter_Post[prop];
undefined;

const obj = {
  false: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

Math.floor(12.9);
12;
Math.floor(12.8);
12;
Math.abs(12.51);
12.51;
Math.floor(12.8);
12;
Math.ceil(12.8);
13;
Math.ceil(12.8);
13;
Math.ceil(12.5);
13;
Math.ceil(12.4);
13;

Math.ceil(-12.4);
-12;
Math.ran(-12.4);

Math.random();
0.36638218736842987;
Math.random();
0.5829060468611439;
Math.random();
0.33847363215361426;
Math.random();
0.6910329402754246;
Math.random();
0.9358366773580028;
Math.random();
0.7146437063488139;
Math.random();
0.3532552733354446;
Math.random();
0.3879644348303839;
Math.random(1);
0.8759497801852476;
Math.random(5);
0.9774785646999513;

undefined;
answer = Math.floor(Math.random() * 10);
undefined;
answer;
4;
let answer = Math.floor(Math.random() * 10);
undefined;
answer;
answer = Math.floor(Math.random() * 10);
undefined;
console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10));
answer = Math.floor(Math.random() * 10);
undefined;
console.log(answer);
undefined;
answer;
1;
answer;
1;
answer1 = Math.floor(Math.random() * 10);
undefined;
answer;
3;
Math.floor(Math.random() * 10);
1;
Math.floor(Math.random() * 10);
3;
Math.floor(Math.random() * 10);
1;
Math.floor(Math.random() * 10);
8;
Math.floor(Math.random() * 10);
8;
Math.floor(Math.random() * 10);
7;
Math.floor(Math.random() * 10);
5;
console.log("vedant");
undefined;
let ved = "vedat";
undefined;
ved;
("vedat");

Math.floor(Math.random() * 10 + 1);
5;
Math.floor(Math.random() * 10 + 1);
2;
Math.floor(Math.random() * 10 + 1);
7;
Math.floor(Math.random() * 10 + 1);
6;
Math.floor(Math.random() * 10 + 1);
8;
Math.floor(Math.random() * 10 + 1);
5;
Math.floor(Math.random() * 10 + 1);
9;
Math.floor(Math.random() * 10 + 1);
3;
Math.floor(Math.random() * 10 + 1);
7;
Math.floor(Math.random() * 10 + 1);
10;

Math.round(5.4);
5;
Math.round(5.4);
5;
Math.round(5.6);
6;
Math.round(-5.6) - 6;
Math.round(-5.4) - 5;

undefined;
Math.random() * 100;
80.88463841578086;
Math.floor(Math.random() * 100 + 1);
6;
Math.floor(Math.random() * 100);
30;
Math.floor(Math.random() * 100);
54;
Math.floor(Math.random() * 100);
62;
Math.floor(Math.random() * 100);
90;
Math.floor(Math.random() * 100);
13;
Math.floor(Math.random() * 100);
65;
Math.floor(Math.random() * 100);
77;
Math.floor(Math.random() * 100);
19;
Math.floor(Math.random() * 100);
25;
Math.floor(Math.random() * 100);
45;
Math.floor(Math.random() * 100);
21;
Math.floor(Math.random() * 100);
51;
Math.floor(Math.random() * 100);
44;
Math.floor(Math.random() * 100);
64;
Math.floor(Math.random() * 100);
24;
Math.floor(Math.random() * 100);
28;
Math.floor(Math.random() * 100);
8;
Math.random() * 100;
94.99051191678014;
Math.random() * 100;
56.66676121136097;
Math.random() * 100;
28.21641164009837;
Math.random() * 100;
65.22317527888842;
Math.random() * 100;
93.34080220158106;
Math.random() * 100;
76.2203042899087;
Math.random() * 100;
9.716763589589817;
Math.random() * 100;
29.41257434649296;
Math.ceil(Math.random() * 100);
37;
Math.ceil(Math.random() * 100);
87;
Math.ceil(Math.random() * 100);
42;
Math.ceil(Math.random() * 100);
43;
Math.ceil(Math.random() * 100);
62;
Math.ceil(Math.random() * 100);
49;
Math.ceil(Math.random() * 100);
85;
Math.ceil(Math.random() * 100);
81;
Math.ceil(Math.random() * 100);
58;
Math.ceil(Math.random() * 100);
82;
Math.ceil(Math.random() * 100);
16;
Math.ceil(Math.random() * 100);
70;
Math.ceil(Math.random() * 100);
44;
Math.ceil(Math.random() * 100);
96;
Math.ceil(Math.random() * 100);
7;
Math.ceil(Math.random() * 100);
84;
Math.ceil(Math.random() * 100);
87;
Math.ceil(Math.random() * 100);
1;
Math.ceil(Math.random() * 100);
50;
Math.ceil(Math.random() * 100);
97;
Math.ceil(Math.random() * 100);
72;
Math.ceil(Math.random() * 100);
26;
Math.ceil(Math.random() * 100);
24;
Math.ceil(Math.random() * 100);
63;
Math.ceil(Math.random() * 100);
19;
Math.ceil(Math.random() * 100);
61;
Math.ceil(Math.random() * 100);
2;
Math.ceil(Math.random() * 100);
9;
Math.ceil(Math.random() * 100);
8;
Math.ceil(Math.random() * 100);
11;
Math.ceil(Math.random() * 100);
86;
Math.ceil(Math.random() * 100);
48;
Math.ceil(Math.random() * 100);
67;
Math.ceil(Math.random() * 100);
34;
Math.ceil(Math.random() * 100);
76;
Math.ceil(Math.random() * 100);
34;
Math.ceil(Math.random() * 100);
7;
Math.ceil(Math.random() * 100);
84;
Math.ceil(Math.random() * 100);
96;
Math.ceil(Math.random() * 100);
10;
Math.ceil(Math.random() * 100);
49;
Math.ceil(Math.random() * 100);
2;
Math.random() * 100;
34.97528015070402;
Math.ceil(Math.random() * 100);
41;
Math.ceil(Math.random() * 100);
39;
Math.ceil(Math.random() * 100);
100;
Math.ceil(Math.random() * 100);
81;

Math.ceil(Math.random() * 5);
5;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
5;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
1;
Math.ceil(Math.random() * 5);
1;
Math.ceil(Math.random() * 5);
2;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
2;
Math.ceil(Math.random() * 5);
4;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
5;
Math.ceil(Math.random() * 5);
3;
Math.ceil(Math.random() * 5);
5;
Math.ceil(Math.random() * 5);
1;
Math.ceil(Math.random() * 5);
2;
Math.ceil(Math.random() * 5);
1;
Math.ceil(Math.random() * 5);
5;
Math.random();
0.16966710823763187;
0.16966710823763187 * 5;
0.8483355411881593;
Math.ceil(0.8483355411881593);
1;
Math.random() * 5;
2.7708418826287566;
Math.random() * 5;
4.820507952224237;
Math.ceil(2.7708418826287566);
3;
const max = prompt("enter the number ");
const random = Math.floor(Math.random() * max + 1);
let user_prompt = prompt(
  "guess the number between 1 to " + max + " or type 'quit' to quit the game  "
);
while (random != true) {
  if (user_prompt == "quit") {
    console.log("you quit the game");
    break;
  }
  if (user_prompt != random) {
    user_prompt = prompt("Wrong guess! Plz try Again or type 'quit' to exit");
  } else {
    console.log("guess is correct ! you win" + random);
    break;
  }
}
