const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const div1 = document.querySelector("div");

btn.addEventListener("click", function (event) {
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
