let headLis = document.querySelectorAll(".header li");
let divCons = document.querySelectorAll(".box div");

headLis.forEach((e) => {
  e.addEventListener("click", function (li) {
    headLis.forEach((li) => {
      li.classList.remove("active");
    });
    li.currentTarget.classList.add("active")
    divCons.forEach((div) => {
      div.classList.remove("active")
      document.querySelector(li.currentTarget.dataset.con).classList.add("active")
    })
  });
});
