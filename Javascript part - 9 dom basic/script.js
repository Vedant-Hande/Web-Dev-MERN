const mainImg = document.getElementById("mainImg");
const spider = document.getElementById("spider");
mainImg.src = "assets/creation_1.png";
spider.textContent = "This is a spider";

let smallImgs = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImgs.length; i++) {
  smallImgs[i].src = "assets/spiderman_img.png";
}
