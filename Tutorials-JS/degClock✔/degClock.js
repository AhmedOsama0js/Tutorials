let day = document.querySelector(".day");
let time = document.querySelector(".h-m-s");
let year = document.querySelector(".year")

setInterval(timeSit,1000)

function timeSit() {
  let T = new Date();
  day.innerHTML = T.toUTCString().split(",")[0];
  time.innerHTML = T.toLocaleTimeString();
  let tt = T.toDateString().split(" ")
  year.innerHTML = `${tt[2]} ${tt[1]} ${tt[3]}`;
}

