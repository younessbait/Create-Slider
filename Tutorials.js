let slidernum = document.getElementById("slidernum");
//!_______________________________________________________________
let conteur = 1;
//!_______________________________________________________________
let arrImg = Array.from(document.querySelectorAll(" img"));
//!_______________________________________________________________
let ul = document.createElement("ul");
ul.setAttribute("id", "ul-id");
for (let i = 1; i <= arrImg.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  let text = document.createTextNode(i);
  li.append(text);
  ul.appendChild(li);
}
document.querySelector(".controlnum").append(ul);
//!_____________________________________________________________
let arrli = Array.from(document.querySelectorAll("ul li"));
function cheker() {
  slidernum.textContent = `Slider#${conteur} of ${arrImg.length}`;
  REM();
  arrImg[conteur - 1].classList.add("active");
  ul.children[conteur - 1].classList.add("active");
  if (conteur == 1) {
    bef.classList.add("next");
  } else {
    bef.classList.remove("next");
  }
  if (conteur == arrImg.length) {
    aft.classList.add("next");
  } else {
    aft.classList.remove("next");
  }
}
//!_____________________________________________________________
function REM() {
  arrImg.forEach((img) => {
    img.classList.remove("active");
  });
  arrli.forEach((li) => {
    li.classList.remove("active");
  });
}
//!_____________________________________________________________
//!_______________________________________________________________
let bef = document.querySelector(".before");
let aft = document.querySelector(".after");
cheker();
bef.onclick = beffun;
aft.onclick = aftfun;
function beffun() {
  if (bef.classList.contains("next")) {
    //todo nothing
  } else {
    conteur--;
    cheker();
  }
}
function aftfun() {
  if (aft.classList.contains("next")) {
    //todo nothing
  } else {
    conteur++;
    cheker();
  }
}
