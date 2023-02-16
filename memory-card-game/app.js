const imG = document.querySelector("img");

imG.addEventListener("click", function () {
  imG.setAttribute("id", "animate"); // Start animation
  setTimeout(changeImg, 1000);
});

const changeImg = () => {
  if (imG.getAttribute("class") == "1") {
    imG.setAttribute("src", "./img/001.png");
    setTimeout(remAni, 1000);
    imG.setAttribute("class", "2");
  } else {
    imG.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
    setTimeout(remAni, 1000);
    imG.setAttribute("class", "1");
  }
};

const remAni = () => {
  imG.removeAttribute("id", "animate"); // Stop animation so we can start again on click
};
