const colours = [
  {
    p1: "red",
    p2: "yellow",
    s: "orange",
  },
  {
    p1: "yellow",
    p2: "blue",
    s: "green",
  },
  {
    p1: "blue",
    p2: "red",
    s: "purple",
  },
  {
    p1: "blue",
    p2: "green",
    s: "teal",
  },
  {
    p1: "yellow",
    p2: "green",
    s: "chartreuse",
  },
  {
    p1: "red",
    p2: "purple",
    s: "magenta",
  },
  {
    p1: "blue",
    p2: "purple",
    s: "violet",
  },
];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let op, rpos;
let game = 0;
let score = 0;

let loadGame = () => {
  document.getElementById("game").innerText = game + 1;
  document.getElementById("score").innerText = score;
  document.getElementById("colour1").style.backgroundColor = colours[game].p1;
  document.getElementById("colour2").style.backgroundColor = colours[game].p2;
  op = document.querySelectorAll(".options .box");
  for (let i of op) {
    let rcol = ["#"];
    for (let j = 0; j < 6; j++) {
      let rnum = Math.floor(Math.random() * 16);
      rcol.push(hex[rnum]);
    }
    i.style.backgroundColor = rcol.join(""); // Adding random colours as options
  }
  rpos = Math.floor(Math.random() * 3);
  op[rpos].style.backgroundColor = colours[game].s; // Hiding correct answer among the options
};

let selected = (val) => {
  if (val == op[rpos].getAttribute("id")) score++;
  game++;
  if (game >= colours.length) {
    let outro = document.createElement("h3");
    outro.innerText = `~GAME OVER~ \n Congratulations! Your score: ${score}/${game}`;
    outro.style.fontSize = "2.8em";
    outro.style.textAlign = "center";
    document.body.innerHTML = "";
    document.body.style.justifyContent = "center";
    document.body.appendChild(outro);
  } else loadGame();
};
