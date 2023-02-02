let seconds = 0;
let milli = 0;
let pause, pause2;
document.getElementById("seconds").innerText = seconds;
document.getElementById("milli").innerText = milli;
let btn = document.getElementById("start");

document.getElementById("start").addEventListener("click", function () {
  if (btn.innerText == "START") {
    btn.innerText = "STOP";
    btn.style.backgroundColor = "#B4161B";
    pause = setInterval(secStart, 1000);
    pause2 = setInterval(milStart, 100);
  } else {
    btn.innerText = "START";
    btn.style.backgroundColor = "#1faa59";
    clearInterval(pause);
    clearInterval(pause2);
  }
});

document.getElementById("reset").addEventListener("click", function () {
  btn.innerText = "START";
  btn.style.backgroundColor = "#1faa59";
  clearInterval(pause);
  clearInterval(pause2);
  seconds = 0;
  milli = 0;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("milli").innerText = milli;
});

function secStart() {
  document.getElementById("seconds").innerText = seconds++;
}

function milStart() {
  if (milli > 9) milli = 0;
  document.getElementById("milli").innerText = milli++;
}
