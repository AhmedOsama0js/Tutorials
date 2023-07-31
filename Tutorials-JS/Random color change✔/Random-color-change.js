let show = document.querySelector(".show");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ops = document.querySelector(".opacity");
let colorInput = document.querySelector(".color-input");

btn.addEventListener("click", makeColor);
input.addEventListener("mouseenter", rangeValue);
colorInput.addEventListener("click", colorInputs);

function makeColor() {
  hx = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let code = [];
  for (let i = 0; i < 6; i++) {
    code.push(hx[Math.floor(Math.random() * hx.length)]);
  }
  let c = `#${code.join("")}`;
  p.innerHTML = `color: ${c}`;
  btn.style.background = c;
  show.style.background = c;
  input.style.color = c;
  colorInput.value = c;
  // document.body.style.background = c;
}

function rangeValue() {
  input.oninput = function () {
    show.style.opacity = `${input.value}%`;
    ops.innerHTML = `opacity: ${input.value}%`;
  };
}

function colorInputs() {
  colorInput.oninput = function () {
    show.style.background = colorInput.value;
    input.style.color = colorInput.value;
    btn.style.background = colorInput.value;
    p.innerHTML = colorInput.value;
  };
}
