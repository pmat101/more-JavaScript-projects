const imgs = document.querySelectorAll("img");

const pokedex = ["001", "004", "007", "023", "025", "039", "095", "150"];
const pokedex2 = pokedex.concat(pokedex);
const jumble = [];
for (let i = 0; i < pokedex.length * 2; i++) {
  let random = Math.floor(Math.random() * pokedex2.length);
  jumble.push(pokedex2[random]); // Get Pokemon pair in random positions
  pokedex2.splice(random, 1);
}

let current1, current2;
let score = 0;
let tries = 0;

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
    let main = document.querySelector("main");
    main.style.opacity = 0.1;
  }
};
