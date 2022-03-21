let modalD = document.getElementById("scndModal");
let btnD = document.getElementById("bookIN");
let spanD = document.getElementsByClassName("closeD")[0];

btnD.onclick = function () {
  modalD.style.display = "block";
};
spanD.onclick = function () {
  modalD.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalD) {
    modalD.style.display = "none";
  }
};

let modalS = document.getElementById("secondModal");
let btnS = document.getElementById("aa");
let spanS = document.getElementsByClassName("closed")[0];

btnS.onclick = function () {
  modalS.style.display = "block";
};
spanS.onclick = function () {
  modalS.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
};

let cros = document.getElementById("cros");
let bars = document.getElementById("bars");
let burger = document.getElementById("burger");

bars.addEventListener("click", () => {
  burger.style.transform = "translate(0px)";
});
cros.addEventListener("click", () => {
  burger.style.transform = "translate(480px)";
});
window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let newbars = document.getElementById("newbars");
let navn = document.getElementById("navn");

newbars.addEventListener("click", () => {
  if (navn.style.display === "none") {
    navn.style.display = "block";
  } else {
    navn.style.display = "none";
  }
});
