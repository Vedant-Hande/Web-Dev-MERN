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
