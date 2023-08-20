let inputs = document.querySelector(".switch input");
let dark = document.querySelector(".dark-mode");
let boxs = document.querySelectorAll(".img-box .box");
let texts = document.querySelectorAll(".img-box .box h3");
console.log(inputs);
inputs.addEventListener("click", () => {
  inputs.classList.toggle("active");
  dark.classList.toggle("active");
  boxs.forEach(box => {
    box.classList.toggle("active")
  });
  texts.forEach((e) => {
    e.classList.toggle("active");
  });
});
