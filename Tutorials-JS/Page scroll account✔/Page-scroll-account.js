let scr = document.querySelector(".scroll");
let count = document.querySelector(".count");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let x = Math.floor((scrollTop * 100) / height)
  scr.style.width = `${x}%`
  count.innerHTML = `${x}%`
  if (x >= 95) {
    scr.classList.add("full") 
    count.classList.add("full") 
  } else {
    scr.classList.remove("full");
    count.classList.remove("full");
  }
  
})
