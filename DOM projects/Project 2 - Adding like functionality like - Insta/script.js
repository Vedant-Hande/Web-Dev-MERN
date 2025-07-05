const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const like = card.querySelector("i");
  card.addEventListener("dblclick", (e) => {
    e.preventDefault();
    // Show like animation
    like.classList.add("active");
    like.classList.add("pulse");
    // Hide like after 2 seconds
    setTimeout(() => {
      like.classList.remove("active");
      like.classList.remove("pulse");
    }, 2000);
  });
});
