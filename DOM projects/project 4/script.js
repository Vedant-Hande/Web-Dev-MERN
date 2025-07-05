let eles = document.querySelectorAll(".elem");

eles.forEach(function (ele) {
  let img = ele.querySelector("img");

  ele.addEventListener("mousemove", function (dets) {
    // Hide all images except the current one
    document.querySelectorAll(".elem img").forEach(function (otherImg) {
      if (otherImg !== img) {
        otherImg.classList.remove("active");
      }
    });
    // Center the image on the cursor using offsetX/offsetY
    const imgSize = 120;
    img.style.left = dets.offsetX - imgSize / 2 + "px";
    img.style.top = dets.offsetY - imgSize / 2 + "px";
    img.classList.add("active");
  });

  ele.addEventListener("mouseleave", function () {
    img.classList.remove("active");
  });
});
