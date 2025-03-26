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
