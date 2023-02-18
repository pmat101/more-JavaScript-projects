const imgs = document.querySelectorAll("img");

const pokedex = ["001", "004", "007", "023", "025", "039", "095", "150"];
const pokedex2 = pokedex.concat(pokedex);
const jumble = [];
for (let i = 0; i < pokedex.length * 2; i++) {
  let random = Math.floor(Math.random() * pokedex2.length);
  jumble.push(pokedex2[random]); // Get Pokemon pair in random positions
  pokedex2.splice(random, 1);
}
/*
  ek card khola
  dusra card khola
  match kiya
  if matched khole rakho (dont remove animation class)
  else revert
*/
let current1, current2;

const turn = (id) => {
  if (current1 == undefined) current1 = assign(id);
  else if (current2 == undefined && id != current1.getAttribute("id")) {
    current2 = assign(id);
    match();
    setTimeout(function () {
      current1 = undefined;
      current2 = undefined;
    }, 6000);
  }
};

const assign = (id) => {
  let param = document.getElementById(id);
  param.setAttribute("class", "animate");
  setTimeout(function () {
    param.setAttribute("src", `./img/${jumble[id]}.png`);
  }, 1000);
  setTimeout(function () {
    param.removeAttribute("class", "animate");
  }, 2000);
  return param;
};

const match = () => {
  let id1 = current1.getAttribute("id");
  let id2 = current2.getAttribute("id");
  if (jumble[id1] == jumble[id2]) console.log("its a match");
  else {
    setTimeout(function () {
      current1.setAttribute("class", "animate");
      current2.setAttribute("class", "animate");
    }, 4000);
    setTimeout(function () {
      current1.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
      current2.setAttribute("src", "./img/gettyimages-157772536-2048x2048.jpg");
    }, 5000);
    setTimeout(function () {
      current1.removeAttribute("class", "animate");
      current2.removeAttribute("class", "animate");
    }, 6000);
  }
};
