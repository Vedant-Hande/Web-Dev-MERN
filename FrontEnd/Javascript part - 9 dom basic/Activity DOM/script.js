const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const div1 = document.querySelector("div");

btn.addEventListener("dbclick", function (event) {
  console.dir(event);
  let randomColor = getRandomColor();
  h2.innerText = randomColor;
  div1.style.backgroundColor = randomColor;
  this.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let result = `rgb(${red}, ${green}, ${blue})`;
  return result;
}

// keybord events ->

let textArea = document.querySelector(".text");
textArea.addEventListener("keydown", function (event) {
  console.dir(event);
  if (event.code == "ArrowUp") {
    console.log("code is arrowup");
  }
});

let form = document.querySelector("form");

form.addEventListener("input", function (event) {
  event.preventDefault();
  console.dir(this[0]);
  console.log(this[0].value);
  console.log(this[1].value);
});

const addBtn = document.querySelector(".addtsk");
const inpTask = document.querySelector("input");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  let delbtn = document.createElement("button");
  let newli = document.createElement("li");

  newli.innerText = inpTask.value;
  delbtn.innerText = "delete";
  //adding class to the delBtn using class list
  delbtn.classList.add("delete");
  newli.appendChild(delbtn);

  ul.appendChild(newli);
  inpTask.innerText = "";
});

// if we trigger the event on the delete button then it cant work on new ly create li button so we directly add eventlistener to the the ul *target -> which element was targeted by the event listener *

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let remLi = event.target.parentElement;
    remLi.remove();
  }
});
