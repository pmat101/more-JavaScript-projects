document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
let dataEntry = (value, id) => {
  let span = document.getElementById(id).parentElement;
  let sibling = span.previousElementSibling;
  sibling.value = value;
};
document
  .querySelector("button[type='submit']")
  .addEventListener("click", function () {
    let p = document.getElementById("amount").value;
    let t = document.getElementById("months").value;
    let i = document.getElementById("intrest").value;
    let r = i / 12 / 100;
    let emi = document.createElement("h3");
    emi.innerText = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    document.body.appendChild(emi);
  });
