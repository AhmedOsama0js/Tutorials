let toggle = document.querySelector(".toggle");
let nav1 = document.querySelector("nav");
let closes = document.querySelector("nav span");
let nav2 = document.querySelector(".click-nav");
let closeNav = document.querySelector(".click-nav button");
let clickBtn = document.querySelector(".button");

toggle.onclick = function () {
  nav1.classList.add("open");
};

closes.onclick = function () {
  nav1.classList.remove("open");
};

clickBtn.onclick = () => {
  nav2.classList.add("open")
}

closeNav.onclick = () => {
  
  nav2.classList.remove("open")
}