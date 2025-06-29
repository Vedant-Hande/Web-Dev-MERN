const mainImg = document.getElementById("mainImg");
const spider = document.getElementById("spider");
mainImg.src = "assets/creation_1.png";
spider.innerText = "This is a spider";

let smallImgs = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImgs.length; i++) {
  smallImgs = smallImgs[i].src = "assets/spiderman_img.png";
}

let demoPragraph = document.getElementsByTagName("p");
demoPragraph[0].style.color = "red";
demoPragraph[1].style.backgroundColor = "yellow";

// query selector
let description = document.querySelector("#description");
description.innerHTML =
  "<b>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum</b>.";

let newImg = document.querySelectorAll(".images img");
// let newImg = document.querySelectorAll(".images .oldImg");

for (const element of newImg) {
  element.src = " assets/creation_3.jpeg";
}

let changeHeading = document.querySelector("#heading2Id");
console.log(changeHeading.getAttribute("class"));
console.log(changeHeading.getAttribute("id"));
console.log(changeHeading.setAttribute("id", "heading_2new"));
console.log(changeHeading.getAttribute("id"));

let changeColor = document.querySelectorAll(".box a");
for (const element of changeColor) {
  element.style.color = "green";
}

const mainBody = document.querySelector("body");

// practice question
// 1 ->
const addP = document.createElement("p");
addP.innerText = "Hey I'm red";
addP.style.color = "red";
mainBody.append(addP);

// 2 ->
const addDiv = document.createElement("div");
addDiv.style.backgroundColor = "pink";
addDiv.style.border = "2px solid black";
mainBody.append(addDiv);

const addH1 = document.createElement("h1");
addH1.innerText = "hey i'm a H1";
addDiv.appendChild(addH1);
const addp = document.createElement("p");
addp.innerText = "me too";
// addDiv.appendChild(addp); we can also use it
addH1.insertAdjacentElement("afterend", addp);

// Assignment Questions
const newBtn = document.createElement("input");
newBtn.setAttribute("type", "buttton");
newBtn.setAttribute("id", "newBtn");
newBtn.setAttribute("value", "Click Me");
newBtn.setAttribute("placeholder", "Username");
// newBtn.toggleAttribute("id", "newBtn");
newBtn.setAttribute("id", "btn");
mainBody.append(newBtn);

let accessBtn = document.querySelector("#btn");
accessBtn.style.backgroundColor = "blue";
accessBtn.style.color = "yellow";

const prar1 = document.createElement("p");
prar1.innerHTML = "<b>DELTA 6.0 </b> Apna college";
mainBody.append(prar1);


