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

const turn = (id) => {
  if (current1 == undefined) assign(current1, id);
  else if (current2 == undefined) assign(current2, id);
  else revert(current1, current2);
};

const assign = (param, id) => {
  param = document.getElementById(id);
  param.setAttribute("id", "animate");
  setTimeout(function () {
    param.setAttribute("src", `./img/${jumble[id]}.png`);
  }, 1000);
  setTimeout(function () {
    param.removeAttribute("id", "animate");
  }, 2000);
};

const revert = (param, id) => {};
