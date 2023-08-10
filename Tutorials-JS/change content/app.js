let love = document.querySelector(".icon i")

let boxColor = document.querySelector(".color");
let Colors = document.querySelectorAll(".color span");

let imgs = document.querySelectorAll(".img img")

let starsBox = document.querySelector(".info div");
let stars = document.querySelectorAll(".info span i");



love.addEventListener("click", () => {
  love.classList.toggle("active")
})

boxColor.addEventListener("click", (e) => {
  [...Colors].forEach(color => {
    color.classList.remove("active")
  })
  e.target.classList.add("active");
  imgs.forEach((img) => {
    img.classList.remove("active");
  })
  document.querySelector(`img.${e.target.id}`).classList.add("active")
})



for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", () => {
    for (let j = 0; j < stars.length; j++) {
      if (j <= i) {
        stars[j].classList.remove("fa-regular");
        stars[j].classList.add("fa-solid");
      } else {
        stars[j].classList.remove("fa-solid");
        stars[j].classList.add("fa-regular");
      }
    }
  });
}