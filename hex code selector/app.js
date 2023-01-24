document.querySelector("button").addEventListener("click", function () {
  let colour = document.getElementById("input");
  let op = document.getElementById("output");
  op.innerText = colour.value;
  let img = document.createElement("img");
  img.setAttribute("src", "./copier.png");
  img.setAttribute("id", "img");
  op.appendChild(img);
  document.getElementById("img").addEventListener("click", function () {
    navigator.clipboard.writeText(colour.value);
    let text = document.createElement("p");
    text.innerText = "Copied!";
    document.body.appendChild(text);
    let disappear = () => (text.style.display = "none");
    setTimeout(disappear, 1000);
  });
});
