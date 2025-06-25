const mainImg = document.getElementById("mainImg");
const spider = document.getElementById("spider");
mainImg.src = "assets/creation_1.png";
spider.innerText = "This is a spider";

let smallImgs = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImgs.length; i++) {
  //   smallImgs[i].style.border = "2px solid red";
  smallImgs[i].style.width = "100px";
  smallImgs = smallImgs[i].src = "assets/spiderman_img.png";
}

let demoPragraph = document.getElementsByTagName("p");
demoPragraph[0].style.color = "red";
demoPragraph[1].style.backgroundColor = "yellow";

// query selector
