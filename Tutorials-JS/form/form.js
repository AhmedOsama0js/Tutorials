let allSlides = document.querySelectorAll("form .slide");
let progressName = document.querySelectorAll(".progress-name span");
let progressPar = document.querySelectorAll(".progress-par span");

let sub = document.querySelector(".submit");


let pop = document.querySelector(".popup");
let clos =document.querySelector(".close")

let next0 = allSlides[0].querySelector(".next"); 
let next1 = allSlides[1].querySelector(".next"); 
let next2 = allSlides[2].querySelector(".next"); 
let next3 = allSlides[2].querySelector(".next"); 


next0.onclick = () => {
  allSlides[0].style.marginLeft = "-25%"
  progressName[0].classList.add("passed");
  progressPar[0].classList.add("passed");
}

next1.addEventListener("click",()=> {
  allSlides[0].style.marginLeft = "-50%"
  progressName[1].classList.add("passed");
  progressPar[1].classList.add("passed");
})

next2.addEventListener("click",()=> {
  allSlides[0].style.marginLeft ="-75%"
  progressName[2].classList.add("passed");
  progressPar[2].classList.add("passed");
})

let prev1 = allSlides[1].querySelector(".previous"); 
let prev2 = allSlides[2].querySelector(".previous"); 
let prev3 = allSlides[3].querySelector(".previous"); 

console.log(allSlides[1]);


prev1.addEventListener("click", () => {
  allSlides[0].style.marginLeft = "0%";
  progressName[0].classList.remove("passed");
  progressPar[0].classList.remove("passed");
});

prev2.addEventListener("click", () => {
  allSlides[0].style.marginLeft = "-25%";
  progressName[1].classList.remove("passed");
  progressPar[1].classList.remove("passed");
});


prev3.addEventListener("click", () => {
  allSlides[0].style.marginLeft = "-50%";
  progressName[2].classList.remove("passed");
  progressPar[2].classList.remove("passed");
});


sub.addEventListener("click", () => {
    pop.style.transform = "translateY(0)";
    progressName[3].classList.add("passed");
    progressPar[3].classList.add("passed");
})

clos.addEventListener("click", () => {
      pop.style.transform = "translateY(-100%)";
      progressName[3].classList.remove("passed");
      progressPar[3].classList.remove("passed");
})