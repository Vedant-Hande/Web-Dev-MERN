const text = document.querySelector("h2");
const btn = document.querySelector("button");

let flag = false;

btn.addEventListener("click", function () {
  if (flag == false) {
    text.innerHTML = "Friends";
    text.style.color = "rgb(4, 212, 22)";
    btn.style.color = "rgb(245, 2, 63)";
    flag = true;
  } else {
    text.innerHTML = "Strangers";
    text.style.color = "rgb(245, 2, 63)";
    btn.style.color = "rgb(4, 212, 22)";
    flag = false;
  }
});
