const card = document.querySelector(".card");
const like = document.querySelector("i");

card.addEventListener("dblclick", (e) => {
  e.preventDefault();
  
  // Show like animation
  like.classList.add("active");
  like.classList.add("pulse");

  // Hide like after 2 seconds
  setTimeout(() => {
    like.classList.remove("active");
    isLiked = false;
  }, 2000);
});
