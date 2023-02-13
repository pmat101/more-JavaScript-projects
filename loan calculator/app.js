document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
// Prevent form from submitting and refreshing the page

let rangeSet = (value, id) => {
  let span = document.getElementById(id).parentElement;
  let sibling = span.nextElementSibling;
  sibling.value = value;
};
// Set range according to input

let dataEntry = (value, id) => {
  let sibling = document.getElementById(id).previousElementSibling;
  let child = sibling.firstElementChild;
  child.value = value;
};
// Set input according to range

document
  .querySelector("button[type='submit']")
  .addEventListener("click", function () {
    let p = document.getElementById("amount").value;
    let t = document.getElementById("months").value;
    let i = document.getElementById("intrest").value;
    let r = i / 12 / 100;
    document.querySelector("#result h3").innerText =
      String.fromCodePoint(8377) +
      " " +
      Math.round((p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1));
  });
// Calculate EMI
