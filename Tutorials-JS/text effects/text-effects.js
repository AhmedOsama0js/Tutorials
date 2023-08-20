let h1 = document.querySelector("h1")



anime({
  targets: "span",
  translateY: [0, 50, 0],
  duration: 1000,
  loop: true,
  easing: "linear",
  delay: anime.stagger(100),
});