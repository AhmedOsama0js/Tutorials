let h1 = document.querySelector(".box h1");
let span = document.querySelector(".box span");
let p = document.querySelector(".container p");

window.onload = () => {
  window.navigator.onLine ? online() : offline();
};

window.addEventListener("online", () => {
  online();
});

window.addEventListener("offline", () => {
  offline();
});

online = () => {
  h1.innerHTML = "OnLine";
  span.style.background = "green";
  span.classList.remove("on")
  p.innerHTML = "You have internet";

};

offline = () => {
  h1.innerHTML = "OffLine";
  span.style.background = "red";
  span.classList.add("on");
  p.innerHTML = "You don't have internet";
};
