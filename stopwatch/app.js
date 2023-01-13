let seconds = 0;
let pause;
document.getElementById("clock").innerText = seconds;
let btn = document.getElementById("start");

document.getElementById("start").addEventListener("click", function () {
  if (btn.innerText == "START") {
    btn.innerText = "STOP";
    btn.style.backgroundColor = "#B4161B";
    pause = setInterval(clockStart, 1000);
  } else {
    btn.innerText = "START";
    btn.style.backgroundColor = "#1faa59";
    clearInterval(pause);
  }
});

document.getElementById("reset").addEventListener("click", function () {
  btn.innerText = "START";
  btn.style.backgroundColor = "#1faa59";
  clearInterval(pause);
  seconds = 0;
  document.getElementById("clock").innerText = seconds;
});

function clockStart() {
  document.getElementById("clock").innerText = seconds++;
}
