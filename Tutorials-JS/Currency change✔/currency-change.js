let egy = document.querySelector("#EGY");
let jpy = document.querySelector("#JPY");
let syr = document.querySelector("#SYR");
let qar = document.querySelector("#QAR");
let aed = document.querySelector("#AED");
let lbp = document.querySelector("#LBP");
let sdg = document.querySelector("#SDG");
let syp = document.querySelector("#SYP");
let tnd = document.querySelector("#TND");
let yer = document.querySelector("#YER");
let dzd = document.querySelector("#DZD");
let iqd = document.querySelector("#IQD");
let jod = document.querySelector("#JOD");
let kwd = document.querySelector("#KWD");
let mad = document.querySelector("#MAD");

let us = document.querySelector("#us");


us.addEventListener("input", () => {
  fetch(
    "https://api.currencyfreaks.com/latest?apikey=35fe5593a6ac4a7a96ac37cb47f90f84"
  )
    .then((result) => result.json())
    .then((item) => {
      console.log(item.rates);
      egy.innerHTML = `EGY = ${Math.round(item.rates["EGP"] * us.value)}`;
      jpy.innerHTML = `JPY = ${Math.round(item.rates["JPY"] * us.value)}`;
      syr.innerHTML = `SAR = ${Math.round(item.rates["SAR"] * us.value)}`;
      qar.innerHTML = `QAR = ${Math.round(item.rates["QAR"] * us.value)}`;
      aed.innerHTML = `AED = ${Math.round(item.rates["AED"] * us.value)}`;
      lbp.innerHTML = `LBP = ${Math.round(item.rates["LBP"] * us.value)}`;
      sdg.innerHTML = `SDG = ${Math.round(item.rates["SDG"] * us.value)}`;
      syp.innerHTML = `SYP = ${Math.round(item.rates["SYP"] * us.value)}`;
      tnd.innerHTML = `TND = ${Math.round(item.rates["TND"] * us.value)}`;
      yer.innerHTML = `YER = ${Math.round(item.rates["YER"] * us.value)}`;
      dzd.innerHTML = `DZD = ${Math.round(item.rates["DZD"] * us.value)}`;
      iqd.innerHTML = `IQD = ${Math.round(item.rates["IQD"] * us.value)}`;
      jod.innerHTML = `JOD = ${Math.round(item.rates["JOD"] * us.value)}`;
      kwd.innerHTML = `KWD = ${Math.round(item.rates["KWD"] * us.value)}`;
      mad.innerHTML = `MAD = ${Math.round(item.rates["MAD"] * us.value)}`;
    });
});










