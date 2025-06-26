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
