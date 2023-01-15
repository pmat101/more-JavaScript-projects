let count = 0;

document.querySelector("button").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  if (input != "") count++;
  for (let i of input) {
    if (i == " " && i + 1 != " ") count++;
  }

  document.getElementById("ans").innerText = count;
  count = 0;
  input = "";
});
