const imgs = document.querySelectorAll("img");
const pokedex = ["001", "004", "007", "023", "025", "039", "095", "150"];
const pokedex2 = [];
const jumble = [];
let current1, current2, score, tries;

function reset() {
  for (i of pokedex) {
    pokedex2.push(i);
    pokedex2.push(i); // Adding same image twice so that it can be matched
  }
  for (let i = 0; i < pokedex.length * 2; i++) {
    let random = Math.floor(Math.random() * pokedex2.length);
    jumble.push(pokedex2[random]);
    pokedex2.splice(random, 1); // Get Pokemon pair in random positions
  }
  score = 0;
  tries = 0;
}
reset();

const turn = (id) => {
  if (current1 == undefined) current1 = assign(id);
  else if (current2 == undefined && id != current1.getAttribute("id")) {
    current2 = assign(id);
    match();
    setTimeout(function () {
      current1 = undefined;
      current2 = undefined;
    }, 3000);
  }
};

const assign = (id) => {
  let param = document.getElementById(id);
  param.setAttribute("class", "animate");
  setTimeout(function () {
    param.setAttribute("src", `./img/${jumble[id]}.png`);
  }, 500);
  setTimeout(function () {
    param.removeAttribute("class", "animate");
  }, 1000);
  return param;
};

const match = () => {
  tries++;
  document.getElementById("try").innerText = tries;
  let id1 = current1.getAttribute("id");
  let id2 = current2.getAttribute("id");
  if (jumble[id1] == jumble[id2]) {
    score++;
    document.getElementById("score").innerText = score;
  } else {
    setTimeout(function () {
      current1.setAttribute("class", "animate");
      current2.setAttribute("class", "animate");
    }, 2000);
    setTimeout(function () {
      current1.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
      current2.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
    }, 2500);
    setTimeout(function () {
      current1.removeAttribute("class", "animate");
      current2.removeAttribute("class", "animate");
    }, 3000);
  }
  if (score >= 8) {
    document.querySelector("header").style.opacity = 0.1;
    document.querySelector("main").style.opacity = 0.1;
    document.querySelector(
      "footer h2"
    ).innerText = `Congratulations! You've completed the game. It took ${tries} tries..`;
    document.querySelector("footer").style.display = "flex";
    jumble.splice(0, jumble.length - 1);
  }
};

document.querySelector("footer h3").addEventListener("click", function () {
  document.querySelector("header").style.opacity = 1;
  document.querySelector("main").style.opacity = 1;
  document.querySelector("footer").style.display = "none";
  reset();
  for (i of imgs)
    i.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
  current1 = undefined;
  current2 = undefined;
  score = 0;
  tries = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("try").innerText = tries;
});
