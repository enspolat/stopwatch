let ms = 0;
let s = 0;
let dk = 0;

const btstart = document.getElementById("btstart");
const btstop = document.getElementById("btstop");
const btsave = document.getElementById("btsave");
const btclear = document.getElementById("btclear");
const time = document.getElementById("span");

let timer1;

let tempData = JSON.parse(localStorage.getItem("data"));

if (tempData) {
  tempData.forEach((timestamp) => {
    let p1 = document.createElement("p");
    console.log(timestamp);
    p1.innerText = timestamp;
    document.getElementById("span").appendChild(p1);
  });
  console.log(tempData);
}

btstart.addEventListener("click", start);
btstop.addEventListener("click", stop);
btsave.addEventListener("click", save);
btclear.addEventListener("click", clear);

function start() {
  msElement = document.getElementById("salise");
  sElement = document.getElementById("saniye");
  dkElement = document.getElementById("dakika");

  btstop.disabled = false;
  btstart.disabled = true;
  btstop.innerText = "Stop";
  btsave.disabled = false;
  btclear.disabled = false;

  timer1 = setInterval(function () {
    ms++;
    if (ms == 10) {
      ms = 0;
      s++;
      s < 10 ? (sElement.innerText = "0" + s) : (sElement.innerText = s);

      if (s == 60) {
        s = 0;
        dk++;
        dk < 10 ? (dkElement.innerText = "0" + dk) : (dkElement.innerText = dk);
      }
    }
    msElement.innerText = "0" + ms;
  }, 100);
}

function stop() {
  if (btstop.innerText == "Reset") {
    document.getElementById("salise").innerText = "00";
    document.getElementById("saniye").innerText = "00";
    document.getElementById("dakika").innerText = "00";

    ms = 0;
    s = 0;
    dk = 0;

    btstop.innerText = "Stop";
    btstop.disabled = "true";
    btstart.innerText = "Start";
    btsave.disabled = "true";
  } else {
    clearInterval(timer1);
    btstop.innerText = "Reset";
    btstart.innerText = "Resume";
    btstart.disabled = false;
  }
}

function save() {
  let data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    localStorage.setItem("data", "[]");
    data = JSON.parse(localStorage.getItem("data"));
  }
  data.push(dk + ":" + s + ":" + ms);

  localStorage.setItem("data", JSON.stringify(data));
  const p = document.createElement("p");
  data.forEach((timestamp) => {
    time.appendChild(p);
    p.innerHTML = timestamp;
  });
}
function clear() {
  time.innerText = "";
  localStorage.removeItem("data");
}
