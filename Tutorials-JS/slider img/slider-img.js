let numSlide = document.querySelector(".num-slide");
let sliderImg = document.querySelectorAll(".box-slider ul li");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let i = 1


nextImg = () => {
  sliderImg = [...sliderImg]
  sliderImg.forEach((e) => {
    e.classList.remove("active")
  })
  i++
  if (i >= sliderImg.length -1) {
    i = 1
  }
  numSlide.innerHTML= `${i} / ${sliderImg.length -1}`
  sliderImg[i].classList.add("active")
  
};

prevImg = () => {
  sliderImg = [...sliderImg];
  sliderImg.forEach((e) => {
    e.classList.remove("active");
  });
  i--;
  if (i <= 0) {
    i = sliderImg.length-1;
    i--;
  }
  numSlide.innerHTML = `${i} / ${sliderImg.length - 1}`;
  sliderImg[i].classList.add("active");
};

setInterval(nextImg,3000);
next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);