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
