// DOM Elements
// Refactored for multiple cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const btn = card.querySelector(".friendBtn");
  const statusText = card.querySelector(".status-text");
  const statusIcon = card.querySelector(".status-icon i");
  const btnText = card.querySelector(".btn-text");
  const btnIcon = card.querySelector(".btn-icon i");
  let isFriend = false;

  btn.addEventListener("click", () => {
    if (!isFriend) {
      isFriend = true;
      card.classList.add("friend");
      statusText.textContent = "Friends";
      statusText.style.color = "#4CAF50";
      statusIcon.className = "fas fa-user-check";
      btnText.textContent = "Remove Friend";
      btnIcon.className = "fas fa-user-minus";
      btn.style.background =
        "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)";
    } else {
      isFriend = false;
      card.classList.remove("friend");
      statusText.textContent = "Stranger";
      statusText.style.color = "#666";
      statusIcon.className = "fas fa-user-plus";
      btnText.textContent = "Add Friend";
      btnIcon.className = "fas fa-user-plus";
      btn.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
  });

  btn.addEventListener("mouseenter", () => {
    if (!isFriend) {
      btn.style.background =
        "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)";
    } else {
      btn.style.background =
        "linear-gradient(135deg, #ff5252 0%, #d32f2f 100%)";
    }
  });

  btn.addEventListener("mouseleave", () => {
    if (!isFriend) {
      btn.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else {
      btn.style.background =
        "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)";
    }
  });
});
