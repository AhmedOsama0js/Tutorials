let deg = 6;
let  hr = document.getElementById("hr")
let  mi = document.getElementById("mi")
let se = document.getElementById("se")




setInterval(() => {
  let day = new Date();

  let hh = day.getHours ()* 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mi.style.transform = `rotateZ(${mm}deg)`;
  se.style.transform = `rotateZ(${ss}deg)`;
},1000);