let cards = document.querySelectorAll(".card");
let paths = document.querySelectorAll(".card div");


['mouseenter', 'mouseleave'].forEach((event) => {
  cards.forEach((card) => {
    card.addEventListener(event, function (e) {
      paths.forEach((path) => {
        path.style.left = `${e.offsetX}px`;
        path.style.top = `${e.offsetY}px`
      })
    })
  })
})