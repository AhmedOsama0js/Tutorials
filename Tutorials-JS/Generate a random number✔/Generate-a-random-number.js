let generate = document.querySelector(".generate");
let serial = document.querySelector(".serial");

let character =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let characterCount = 7;

generate.onclick = () => {
  let end = "";
  for (let i = 0; i <= characterCount; i++) {
    end += character[Math.floor(Math.random() * character.length)]
  }
  serial.innerHTML = end
};