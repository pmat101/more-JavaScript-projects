let input = document.getElementById("input");
let count = 0;

document.querySelector("button").addEventListener("click", function () {
  let val = input.value;
  if (val != "") count++;
  for (let i = 0; i < val.length; i++) {
    if (val[i] == " " && val[i + 1] != " " && val[i + 1] != undefined) count++;
  }

  document.getElementById("word").innerText = count;
  document.getElementById("char").innerText = val.length;
  count = 0;
  input.value = "";
});
