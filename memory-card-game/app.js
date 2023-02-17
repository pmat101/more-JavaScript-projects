const imgs = document.querySelectorAll("img");

const pokedex = ["001", "004", "007", "023", "025", "039", "095", "150"];
const pokedex2 = pokedex.concat(pokedex);
const jumble = [];
for (let i = 0; i < pokedex.length * 2; i++) {
  let random = Math.floor(Math.random() * pokedex2.length);
  jumble.push(pokedex2[random]); // Get Pokemon pair in random positions
  pokedex2.splice(random, 1);
}

const turn = (id) => {
  let current = document.getElementById(id);
  current.setAttribute("id", "animate");
  setTimeout(function () {
    current.setAttribute("src", `./img/${jumble[id]}.png`);
  }, 1000);
  setTimeout(function () {
    current.removeAttribute("id", "animate");
  }, 2000);
};
