let headList = document.querySelectorAll(".header-list li");
let item = document.querySelectorAll(".box div");

headList.forEach((li) => {
  li.addEventListener("click", function () {
    headList.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    item.forEach((div) => {
      div.classList.remove("active");
      div.style.display = "none";
    });
    let divs = document.querySelectorAll(li.dataset.news);
    divs.forEach((div) => {
      div.classList.add("active");
      div.style.display = "block";
    });
  });
});
