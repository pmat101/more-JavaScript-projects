let ball = document.querySelector("nav .ball");
let sack = document.querySelector("nav .sack");

sack.addEventListener("click", function () {
  if (sack.getAttribute("id") == "light") {
    ball.style.marginRight = "0";
    ball.style.marginLeft = "2em";
    sack.setAttribute("id", "dark");
    darkMode();
  } else {
    ball.style.marginRight = "2em";
    ball.style.marginLeft = "0";
    sack.setAttribute("id", "light");
    lightMode();
  }
});

const darkMode = () => {
  document.body.style.backgroundColor = "#444";
  document.body.style.color = "#fff";
  document.querySelector("nav").style.backgroundColor = "#000";
  document.querySelector("footer").style.backgroundColor = "#222";
  ball.style.backgroundColor = "#666";
  sack.style.backgroundColor = "#222";
  document.querySelector("hr").style.border = "1px solid #fff";
};

const lightMode = () => {
  document.body.style.backgroundColor = "#bbb";
  document.body.style.color = "#000";
  document.querySelector("nav").style.backgroundColor = "#fff";
  document.querySelector("footer").style.backgroundColor = "#ddd";
  ball.style.backgroundColor = "#999";
  sack.style.backgroundColor = "#ddd";
  document.querySelector("hr").style.border = "1px solid #000";
};

lightMode();
