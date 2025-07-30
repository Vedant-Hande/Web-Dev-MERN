// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Animate the count number
  const countElement = document.getElementById("studentCount");
  const finalCount = parseInt(countElement.textContent);

  // Reset to 0 and animate up
  countElement.textContent = "0";

  let currentCount = 0;
  const increment = finalCount / 50; // Animate over 50 steps

  const timer = setInterval(() => {
    currentCount += increment;
    if (currentCount >= finalCount) {
      currentCount = finalCount;
      clearInterval(timer);
    }
    countElement.textContent = Math.floor(currentCount);
  }, 20);

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add click effects to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "translateY(-1px) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });
});
