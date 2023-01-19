document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents form submission
});

let radio, selected, entry, price;
let total = 0;

let add = () => {
  entry = document.getElementById("entry");
  price = document.getElementById("price");
  let li = document.createElement("li");
  let li_name = document.createElement("span");
  let li_price = document.createElement("span");
  li_name.innerText = entry.value;
  li.appendChild(li_name);
  li.appendChild(li_price);
  radio = document.querySelectorAll("input[name='type']"); // checks the entry type
  for (let i of radio) {
    if (i.checked) {
      selected = i.getAttribute("id");
      if (selected == "credit") {
        // total amount added/deducted according to condition
        li_price.style.color = "green";
        li_price.innerText = ` + ${String.fromCodePoint(08377)} ${price.value}`;
        total -= parseFloat(price.value);
      } else {
        li_price.style.color = "red";
        li_price.innerText = ` - ${String.fromCodePoint(08377)} ${price.value}`;
        total += parseFloat(price.value);
      }
    }
  }
  document.getElementById("items").appendChild(li);
  document.getElementById("total").innerText = `${String.fromCodePoint(
    08377
  )} ${total}`;
};
